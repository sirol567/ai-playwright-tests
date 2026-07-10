const { test, expect } = require('@playwright/test');

test('Verify application handles multiple logout clicks properly', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');
  await expect(page.locator('a:has-text("Logout")')).toBeVisible();
  const logoutButton = page.locator('a:has-text("Logout")');
  await Promise.all([
    logoutButton.click(),
    logoutButton.click(),
    logoutButton.click()
  ]);
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
  await expect(page.locator('button:has-text("Login")')).toBeVisible();
});