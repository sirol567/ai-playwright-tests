const { test, expect } = require('@playwright/test');

test('Verify secure area page loads successfully after login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');
  await expect(page).toHaveURL(/.*secure/);
  const flash = await page.locator('#flash');
  await expect(flash).toContainText('You logged into a secure area!');
});