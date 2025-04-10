import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',  // ✅ Directly use chromium (no device emulation)
        viewport: null,           // ✅ No default viewport
        launchOptions: {
          args: ['--start-maximized'], // ✅ Maximized window
        },
        headless: false,          // ✅ Show browser
      },
    },
  ],
});
