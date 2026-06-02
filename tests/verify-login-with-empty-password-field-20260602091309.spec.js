const { test, expect } = require('@playwright/test');

test('Verify login with empty password field', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', '');
  await page.click('button:has-text("Login")');
  const errorMessage = await page.locator('#flash').innerText();
  expect(errorMessage).toContain('Your password is invalid!');
});