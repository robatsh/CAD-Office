import { expect, test } from '@playwright/test'

test.use({ colorScheme: 'dark', locale: 'en-US' })

test('selects explicit themes and follows system appearance on demand', async ({
  page
}) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'New Drawing' }).click()

  const theme = page.getByRole('combobox', { name: 'Theme', exact: true })
  const html = page.locator('html')
  await expect(theme).toHaveValue('dark')
  await expect(html).toHaveAttribute('data-ml-ui-theme', 'dark')

  await theme.selectOption('light')
  await expect(html).toHaveAttribute('data-ml-ui-theme', 'light')

  await theme.selectOption('system')
  await expect(html).toHaveAttribute('data-ml-ui-theme', 'dark')
  await page.emulateMedia({ colorScheme: 'light' })
  await expect(html).toHaveAttribute('data-ml-ui-theme', 'light')
  await expect(theme).toHaveValue('system')

  await theme.selectOption('dark')
  await expect(html).toHaveAttribute('data-ml-ui-theme', 'dark')
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.emulateMedia({ colorScheme: 'light' })
  await expect(html).toHaveAttribute('data-ml-ui-theme', 'dark')
  await expect(theme).toHaveValue('dark')
})
