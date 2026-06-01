const { test, expect } = require('@playwright/test');

test('Verify secure content visibility only for authenticated users', async ({ page }) => {
  // Step 1: Login successfully
  await page.goto('https://the-internet.herokuapp.com/secure');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button:has-text("Login")');

  // Step 2: Verify secure content visibility
  const secureContent = await page.locator('.content').textContent();
  expect(secureContent).toBe('Welcome to the Secure Area!');
});
