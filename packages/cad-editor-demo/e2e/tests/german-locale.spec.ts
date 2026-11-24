import { expect, test } from '@playwright/test'

test.use({ locale: 'de-DE' })

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
