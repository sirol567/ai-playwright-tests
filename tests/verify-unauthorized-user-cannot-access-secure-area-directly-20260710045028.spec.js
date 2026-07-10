const { test, expect } = require('@playwright/test');

test('Verify unauthorized user cannot access Secure Area directly', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await expect(page.locator('#username')).toBeVisible();
  await expect(page.locator('button:has-text("Login")')).toBeVisible();
});