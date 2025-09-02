import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'test/playwright',
  /* Run in a single worker for consistency */
  workers: 1,
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:3000',
    // Use system Edge to avoid downloading browsers
    channel: 'msedge',
    headless: true,
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000/index.html',
    reuseExistingServer: false,
    timeout: 120_000,
  },
});

