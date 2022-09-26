import { test, expect } from '@playwright/test';

test('play with all types of child window', async ({ context, page }) => {
  await page.goto('loginpagePractise');
  const documentLink = page.locator('[href*="documents-request"]');

//   await context.on('page', async (newpage)=> {
//     await newpage.waitForLoadState();
//     console.log(await newpage.title());
//   })
// await documentLink.click();

 const [newPage]  = await Promise.all([
    context.waitForEvent('page'),
    await documentLink.click()
 ]);
 const randomText = newPage.locator('.red')
 console.log(await randomText.textContent())
//   await page.pause()
});
