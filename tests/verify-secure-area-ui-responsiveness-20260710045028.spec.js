const { test, expect } = require('@playwright/test');

test('Verify Secure Area UI responsiveness', async ({ page, browser }) => {
  const iPhone = playwright.devices['iPhone 12'];
  const context = await browser.newContext({
    ...iPhone
  });
  const mobilePage = await context.newPage();
  await mobilePage.goto('https://the-internet.herokuapp.com/secure');
  await expect(mobilePage.locator('label:has-text("Username")')).toBeVisible();
  await context.close();
});