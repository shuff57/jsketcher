import { test, expect } from '@playwright/test';

test('index initializes @smoke', async ({ page }) => {
  await page.goto('/index.html#TestProject');
  await expect(page.locator('#app')).toBeVisible();
  const hasApp = await page.evaluate(() => Boolean((window as any).__CAD_APP));
  expect(hasApp).toBe(true);
});

test('sketcher initializes @smoke', async ({ page }) => {
  await page.goto('/sketcher.html#TestProject');
  await expect(page.locator('#viewer-container')).toBeVisible();
  const hasApp = await page.evaluate(() => Boolean((window as any).__CAD_APP));
  expect(hasApp).toBe(true);
});
