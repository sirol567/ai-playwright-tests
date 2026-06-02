const { test, expect } = require('@playwright/test');

test('Verify secure content visibility only for authenticated users', async ({ page }) => {
  // Step 1: Login successfully
await page.goto('https://the-internet.herokuapp.com/login');

await page.fill('#username', 'tomsmith');
await page.fill('#password', 'SuperSecretPassword!');

await page.click('button[type="submit"]');

// IMPORTANT: wait for navigation
await page.waitForURL('**/secure');

// now validate
await expect(page.locator('h2')).toContainText('Secure Area');
});
