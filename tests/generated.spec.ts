import { test } from '@playwright/test';

test.describe('Confirm Dialog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render confirm dialog', async ({ page }) => {
    const confirmDialogButton = page.getByRole('button', { name: 'Confirm' });
    const confirmDialog = await page.locator('.confirm-dialog');

    expect(confirmDialog).toBeVisible();

    await confirmDialogButton.click();
  });

  test('should handle confirmation', async ({ page }) => {
    const confirmDialogButton = page.getByRole('button', { name: 'Confirm' });
    const confirmDialog = await page.locator('.confirm-dialog');

    await confirmDialogButton.click();

    // Simulate user interaction with the dialog
    await confirmDialog.type('Yes');
    await confirmDialog.press('Enter'); // Assuming "yes" is an option for confirmation

    expect(confirmDialog).not.toBeVisible();
  });

  test('should handle cancellation', async ({ page }) => {
    const confirmDialogButton = page.getByRole('button', { name: 'Confirm' });
    const confirmDialog = await page.locator('.confirm-dialog');

    await confirmDialogButton.click();

    // Simulate user interaction with the dialog
    await confirmDialog.press('Escape'); // Assuming "cancel" is an option for cancellation

    expect(confirmDialog).not.toBeVisible();
  });

  test('should handle error in confirmation', async ({ page }) => {
    const confirmDialogButton = page.getByRole('button', { name: 'Confirm' });
    const confirmDialog = await page.locator('.confirm-dialog');

    await confirmDialogButton.click();

    // Simulate an error scenario
    await confirmDialog.press('Enter'); // Assuming "yes" is an invalid option for confirmation

    expect(confirmDialog).not.toBeVisible();
  });

  test('should handle confirmation with table data', async ({ page }) => {
    const confirmDialogButton = page.getByRole('button', { name: 'Confirm' });
    const confirmDialog = await page.locator('.confirm-dialog');

    await confirmDialogButton.click();

    // Simulate user interaction with the dialog
    await confirmDialog.type('{enter}');
    await confirmDialog.press('Enter'); // Assuming "yes" is an invalid option for confirmation

    expect(confirmDialog).not.toBeVisible();
  });

  test('should handle confirmation without table data', async ({ page }) => {
    const confirmDialogButton = page.getByRole('button', { name: 'Confirm' });
    const confirmDialog = await page.locator('.confirm-dialog');

    await confirmDialogButton.click();

    // Simulate user interaction with the dialog
    await confirmDialog.type('Yes');
    await confirmDialog.press('Enter'); // Assuming "yes" is an invalid option for confirmation

    expect(confirmDialog).not.toBeVisible();
  });

  test('should handle confirmation with card data', async ({ page }) => {
    const confirmDialogButton = page.getByRole('button', { name: 'Confirm' });
    const confirmDialog = await page.locator('.confirm-dialog');

    await confirmDialogButton.click();

    // Simulate user interaction with the dialog
    await confirmDialog.type('Yes');
    await confirmDialog.press('Enter'); // Assuming "yes" is an invalid option for confirmation

    expect(confirmDialog).not.toBeVisible();
  });
});