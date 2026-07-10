const { test, expect } = require('@playwright/test');

test('Verify secure content visibility only for authenticated users', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');
  const flash = await page.locator('#flash');
  await expect(flash).toContainText('You logged into a secure area!');
});