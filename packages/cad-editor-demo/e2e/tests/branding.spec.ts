import { expect, test } from '@playwright/test'

test.use({ locale: 'en-US' })

test('keeps the default appearance when branding is unavailable', async ({
  page
}) => {
  await page.route('**/branding/branding.json', route =>
    route.fulfill({ status: 404 })
  )
  await page.goto('/')
  await expect(page.locator('.portal-name')).toHaveText('CAD-Office')
  await expect(page.locator('.portal-logo')).toHaveCount(0)
  await expect(page.locator('.portal-header')).toHaveCSS(
    'border-bottom-color',
    'rgb(57, 164, 180)'
  )
})

test('loads deployment branding and switches editor accents with the theme', async ({
  page
}) => {
  await page.route('**/branding/branding.json', route =>
    route.fulfill({
      json: {
        logo: 'logo.svg',
        favicon: 'logo.svg',
        lightAccent: '#086781',
        darkAccent: '#63d7e2'
      }
    })
  )
  await page.route('**/branding/logo.svg', route =>
    route.fulfill({
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"/>'
    })
  )
  await page.goto('/')
  await expect(page.locator('.portal-logo')).toBeVisible()
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    'href',
    /\/branding\/logo\.svg$/
  )
  await expect(page.locator('.portal-header')).toHaveCSS(
    'border-bottom-color',
    'rgb(8, 103, 129)'
  )

  await page.getByRole('button', { name: 'New Drawing' }).click()
  const theme = page.getByRole('combobox', { name: 'Theme', exact: true })
  const html = page.locator('html')
  await theme.selectOption('dark')
  await expect(html).toHaveCSS('--el-color-primary', '#63d7e2')
  await theme.selectOption('light')
  await expect(html).toHaveCSS('--el-color-primary', '#086781')
})
