const { test, expect } = require('@playwright/test');

test('Verify login with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');
  await expect(page.locator('locator').toContainText('You logged into a secure area!');
});
