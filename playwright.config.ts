import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  // reporter: 'html',
  
  use: {
   headless: false,
   baseURL: 'https://www.rahulshettyacademy.com',
   launchOptions: {
    slowMo: 50,
  },
  },

};

export default config;
