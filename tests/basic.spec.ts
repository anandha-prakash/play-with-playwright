import { test, expect } from '@playwright/test';

test('play with all types of selectors', async ({ page }) => {
  await page.goto('loginpagePractise');
  
  const username = await page.locator('#username');
  const password = await page.locator('#password');
  const submit = await page.locator('#signInBtn');
  const cardTitle = await page.locator('.card-body a');

  await username.type('rahulshettyacademy')
  await password.type('learning')
  await Promise.all([ 
    page.waitForNavigation(), submit.click()
  ])
  
  console.log(await cardTitle.allTextContents());

});
