const { test, expect } = require('@playwright/test');

test('Verify Products page loads successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-testid="username"]', 'tomsmith');
  await page.fill('[data-testid="password"]', 'SuperSecretPassword!');
  await page.click('[data-testid="login-button"]');
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('text=Products')).toBeVisible();
});