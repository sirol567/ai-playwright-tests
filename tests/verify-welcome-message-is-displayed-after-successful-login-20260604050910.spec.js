const { test, expect } = require('@playwright/test');

test('Verify welcome message is displayed after successful login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');
  const welcomeMessage = await page.locator('div#flash').textContent();
  expect(welcomeMessage).toContain('You logged into a secure area!');
});