const { test, expect } = require('@playwright/test');

test('Verify session persistence after browser reopen', async ({ browser }) => {
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://the-internet.herokuapp.com/secure');
  await page1.fill('#username', 'tomsmith');
  await page1.fill('#password', 'SuperSecretPassword!');
  await page1.click('button:has-text("Login")');
  await expect(page1.locator('a:has-text("Elemental Selenium")')).toBeVisible();
  const storageState = await context1.storageState();
  await context1.close();

  const context2 = await browser.newContext({ storageState });
  const page2 = await context2.newPage();
  await page2.goto('https://the-internet.herokuapp.com/secure');
  await expect(page2.locator('a:has-text("Elemental Selenium")')).toBeVisible();
  await context2.close();
});