const { test, expect } = require('@playwright/test');

test('Verify successful login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-testid="username"]', 'tomsmith');
  await page.fill('[data-testid="password"]', 'SuperSecretPassword!');
  await page.click('[data-testid="login-button"]');
  await expect(page).toHaveURL(/inventory.html/);
});