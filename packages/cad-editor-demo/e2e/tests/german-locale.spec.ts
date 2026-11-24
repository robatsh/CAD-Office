import { expect, test } from '@playwright/test'

test.use({ locale: 'de-DE' })

test('shows CAD-Office project information in the About dialog', async ({
  page
}) => {
  test.setTimeout(120_000)
  await page.goto('/')

  const newDrawing = page.getByRole('button', { name: 'Neue Zeichnung' })
  const fileMenu = page.getByRole('button', { name: 'Datei', exact: true })
  await expect(async () => {
    if (await newDrawing.isVisible()) await newDrawing.click()
    await expect(fileMenu).toBeVisible({ timeout: 10_000 })
  }).toPass({ timeout: 90_000 })

  await fileMenu.click()
  await page.getByText('Über', { exact: true }).click()

  const dialog = page.getByRole('dialog', { name: 'Über', exact: true })
  const projectUrl = 'https://github.com/robatsh/CAD-Office'
  await expect(dialog.getByText('CAD-Office', { exact: true })).toBeVisible()
  await expect(dialog.getByText('CAD-Viewer und Editor')).toBeVisible()
  await expect(dialog.getByText('Basiert auf MLightCAD.')).toBeVisible()
  await expect(dialog.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
    'href',
    projectUrl
  )
  await expect(
    dialog.getByRole('link', { name: 'Dokumentation' })
  ).toHaveAttribute('href', `${projectUrl}/blob/main/DEVELOPMENT.md`)
  await expect(dialog.getByRole('link', { name: 'MIT' })).toHaveAttribute(
    'href',
    `${projectUrl}/blob/main/LICENSE`
  )
})

test('loads German and saves changes made in the ribbon', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', { name: 'CAD-Datei zum Anzeigen auswählen' })
  ).toBeVisible()

  const language = page
    .locator('.ml-ribbon-language-switch')
    .getByText('Deutsch', { exact: true })
  const newDrawing = page.getByRole('button', { name: 'Neue Zeichnung' })

  // Vite can reload the landing page after optimizing the viewer on first use.
  await expect(async () => {
    if (await newDrawing.isVisible()) await newDrawing.click()
    await expect(language).toBeVisible({ timeout: 5_000 })
  }).toPass({ timeout: 45_000 })

  await language.click()
  await page.getByRole('option', { name: 'English', exact: true }).click()
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem('preferred_lang')))
    .toBe('en')

  await page.reload()
  await expect(
    page.getByRole('heading', { name: 'Select CAD File to View' })
  ).toBeVisible()
})
