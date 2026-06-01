const { test, expect } = require('@playwright/test');

test('Verify secure content visibility only for authenticated users', async ({ page }) => {
  // Step 1: Login successfully
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  
  // Wait for navigation to complete after login
  await Promise.all([
    page.waitForNavigation(),
    page.click('button:has-text("Login")')
  ]);

  // Step 2: Verify secure content visibility
  await expect(page.getByText('Welcome to the Secure Area!')).toBeVisible();
});
