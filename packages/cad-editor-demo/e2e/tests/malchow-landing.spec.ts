import { expect, test } from '@playwright/test'

test.use({ locale: 'de-DE', viewport: { width: 390, height: 844 } })

test('keeps drawing actions accessible on the mobile landing page', async ({
  page
}) => {
  await page.goto('/')

  const header = page.getByRole('banner')
  await expect(header).toHaveText('CAD-Viewer')
  await expect(header.getByRole('link')).toHaveCount(0)
  const main = page.getByRole('main')
  await expect(
    main.getByRole('heading', { name: 'CAD-Datei zum Anzeigen auswählen' })
  ).toBeVisible()
  await expect(
    main.getByRole('button', { name: 'Neue Zeichnung' })
  ).toBeVisible()

  const options = main.getByRole('button', { name: 'Optionen zum Öffnen' })
  await expect(options).toHaveAttribute('aria-expanded', 'false')
  await options.click()
  await expect(options).toHaveAttribute('aria-expanded', 'true')
})
