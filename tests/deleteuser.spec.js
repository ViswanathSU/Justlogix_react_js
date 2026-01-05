import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Delete' }).nth(1).click();
  await page.getByRole('button', { name: 'Yes' }).click();
});