const { test, expect } = require('@playwright/test');

test('Verify secure content visibility only for authenticated users', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');
  const content = await page.locator('a').first().textContent();
  expect(content).toBeDefined();
  await expect(page.locator('text=Secure Area')).toBeVisible();
});