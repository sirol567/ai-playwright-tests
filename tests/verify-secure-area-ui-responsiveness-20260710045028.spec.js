const { test, expect, devices } = require('@playwright/test');

test('Verify Secure Area UI responsiveness', async ({ browser }) => {
  const iPhone = devices['iPhone 12'];

  const context = await browser.newContext({
    ...iPhone,
  });

  const mobilePage = await context.newPage();

  await mobilePage.goto('https://the-internet.herokuapp.com/login');

  await expect(mobilePage.locator('#username')).toBeVisible();
  await expect(mobilePage.locator('#password')).toBeVisible();

  await context.close();
});
