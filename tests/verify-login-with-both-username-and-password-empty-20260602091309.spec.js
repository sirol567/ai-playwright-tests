const { test, expect } = require('@playwright/test');

test('Verify login with both username and password empty', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', '');
  await page.fill('#password', '');
  await page.click('button:has-text("Login")');
  const errorMessage = await page.locator('#flash').textContent();
  expect(errorMessage).toContain('Your username is invalid!');
});