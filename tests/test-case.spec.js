const { test, expect } = require('@playwright/test');

test('Verify login with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('[name="username"]', 'tomsmith');
  await page.fill('[name="password"]', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');
});
