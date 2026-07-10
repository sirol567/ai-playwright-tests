const { test, expect } = require('@playwright/test');

test('Verify Secure Area UI responsiveness', async ({ page, browserName }) => {
  const iPhone = { viewport: { width: 375, height: 667 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14E5239e Safari/602.1' };
  const context = await page.context().browser().newContext({ ...iPhone });
  const mobilePage = await context.newPage();
  await mobilePage.goto('https://the-internet.herokuapp.com/login');
  await mobilePage.fill('#username', 'tomsmith');
  await mobilePage.fill('#password', 'SuperSecretPassword!');
  await mobilePage.click('button:has-text("Login")');
  await expect(mobilePage.locator('a')).toBeVisible();
  await context.close();
});