import { test, expect } from '@playwright/test';

// Fail fast on JS errors/console errors
test.beforeEach(async ({ page }) => {
  page.on('pageerror', (err) => {
    throw err;
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const text = msg.text();
      // Ignore generic resource 404s in smoke (fonts, favicons, etc.)
      if (!/Failed to load resource/i.test(text)) {
        throw new Error(`Console error: ${text}`);
      }
    }
  });
});

test('index initializes and basic interaction @smoke', async ({ page }) => {
  await page.goto('/index.html#TestProject');
  await expect(page.locator('#app')).toBeVisible();
  const hasApp = await page.evaluate(() => Boolean((window as any).__CAD_APP));
  expect(hasApp).toBe(true);

  // Minimal interaction: click the canvas and ensure no JS errors
  const canvas = page.locator('canvas').first();
  await expect(canvas).toBeVisible();
  await canvas.click({ position: { x: 10, y: 10 } });

  // Check the OCCT wasm asset is served
  const res = await page.request.get('/lib-assets/jsketcher-occ-engine/occt.wasm');
  expect(res.ok()).toBeTruthy();
});

test('sketcher initializes and wasm asset available @smoke', async ({ page }) => {
  await page.goto('/sketcher.html#TestProject');
  await expect(page.locator('#viewer-container')).toBeVisible();
  const hasApp = await page.evaluate(() => Boolean((window as any).__CAD_APP));
  expect(hasApp).toBe(true);

  // Check the OCCT wasm asset is served
  const res = await page.request.get('/lib-assets/jsketcher-occ-engine/occt.wasm');
  expect(res.ok()).toBeTruthy();
});
