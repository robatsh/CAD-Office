import { expect, test } from '@playwright/test'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const template = new URL(
  '../../static/cad-data/templates/acadiso.dxf',
  import.meta.url
)

test.use({ locale: 'de-DE' })

test.beforeEach(async ({ page, baseURL }) => {
  const origin = new URL(baseURL!).origin
  await page.route(
    url => url.origin !== origin,
    route => route.abort()
  )
})

test('creates a drawing with the local template', async ({ page }) => {
  await page.goto('/')
  const templateResponse = page.waitForResponse(response =>
    response.url().endsWith('/cad-data/templates/acadiso.dxf')
  )
  await page.getByRole('button', { name: 'Neue Zeichnung' }).click()

  expect((await templateResponse).ok()).toBe(true)
  await expect(
    page.getByRole('tab', { name: 'Model', exact: true })
  ).toBeVisible()
})

test('keeps an early file selection while the editor loads', async ({
  page
}) => {
  let releaseEditor!: () => void
  const editorReady = new Promise<void>(resolve => {
    releaseEditor = resolve
  })
  await page.route('**/cad-editor/src/index.ts*', async route => {
    await editorReady
    await route.continue()
  })

  try {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await page
      .locator('input[type="file"]')
      .first()
      .setInputFiles(
        fileURLToPath(new URL('../fixtures/minimal-line.dxf', import.meta.url))
      )
    await expect(page.getByRole('status')).toHaveText(
      'CAD-Editor wird geladen …'
    )
    await expect(page.locator('.file-upload-container')).toHaveAttribute(
      'inert',
      ''
    )
  } finally {
    releaseEditor()
  }

  await expect(
    page.getByRole('tab', { name: 'Model', exact: true })
  ).toBeVisible()
})

for (const renderMode of ['Hauptthread', 'Web-Worker']) {
  test(`loads drawing text locally in ${renderMode} mode`, async ({ page }) => {
    const blankDrawing = (await readFile(template, 'utf8')).replace(
      /\r\n/g,
      '\n'
    )
    const drawingWithText = blankDrawing.replace(
      '2\nENTITIES\n',
      '2\nENTITIES\n0\nTEXT\n8\n0\n10\n0\n20\n0\n30\n0\n40\n5\n1\nMalchow\n7\nSTANDARD\n'
    )

    await page.goto('/')
    const catalogResponse = page.waitForResponse(response =>
      response.url().endsWith('/cad-data/fonts/fonts.json')
    )
    const fontResponse = page.waitForResponse(response =>
      response.url().endsWith('/cad-data/fonts/LiberationSans-Regular.ttf')
    )
    await page.getByRole('radio', { name: renderMode, exact: true }).click()
    await page
      .locator('input[type="file"]')
      .first()
      .setInputFiles({
        name: 'malchow-text.dxf',
        mimeType: 'application/dxf',
        buffer: Buffer.from(drawingWithText)
      })

    expect((await catalogResponse).ok()).toBe(true)
    expect((await fontResponse).ok()).toBe(true)
    await expect(page.locator('.ml-cad-container canvas').first()).toBeVisible()
  })
}
