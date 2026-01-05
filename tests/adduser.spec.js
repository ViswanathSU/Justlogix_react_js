import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: '+ Add' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Victor');
  await page.getByRole('textbox', { name: 'Age' }).click();
  await page.getByRole('textbox', { name: 'Age' }).fill('23');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('victor21@gmail.com');
  await page.getByRole('button', { name: 'Add' }).click();
});