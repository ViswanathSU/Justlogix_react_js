import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Viswanath SU');
  await page.getByRole('textbox', { name: 'Age' }).click();
  await page.getByRole('textbox', { name: 'Age' }).fill('21');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).fill('viswanath14@gmail.com');
  await page.getByRole('button', { name: 'Save' }).click();
});