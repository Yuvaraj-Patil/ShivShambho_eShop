import { test, expect } from '@playwright/test';

test('Browse Items', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Where soulful choices meet divine purpose.' })).toBeVisible();

  await page.getByRole('link', { name: 'Adventurer GPS Watch' }).click(); 
  await page.getByRole('heading', { name: 'Adventurer GPS Watch' }).click();
  
  //Expect
  await expect(page.getByRole('heading', { name: 'Adventurer GPS Watch' })).toBeVisible();
});