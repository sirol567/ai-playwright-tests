const { test, expect } = require('@playwright/test');

test('Verify welcome message is displayed', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');
  await expect(page.locator('.flash')).toContainText('Welcome back, tomsmith!');
});