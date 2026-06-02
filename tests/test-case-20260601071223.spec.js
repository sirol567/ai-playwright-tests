import { test, expect } from '@playwright/test';

test('Verify secure content visibility only for authenticated users', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  await page.click('button[type="submit"]');

  // wait for login success navigation
  await page.waitForURL('**/secure');

});
