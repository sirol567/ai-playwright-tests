const { test, expect } = require('@playwright/test');

test('verify secure area page loads successfully after login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');
  await expect(page.locator('h2')).toHaveText(' Secure Area');
  await expect(page).toHaveURL(/.*\/secure/);
});