import { test, expect } from '@playwright/test';

test('play with all types of controls', async ({ page }) => {
  await page.goto('loginpagePractise');
  
  const username = await page.locator('#username');
  const password = await page.locator('#password');
  const submit = await page.locator('#signInBtn');
  const select = await page.locator('select.form-control');
  const userRadioButton = await page.locator('.radiotextsty');
  const okayBtn = await page.locator('#okayBtn');
  const termsCheckbox = await page.locator('#terms');

  await select.selectOption('consult')
  await userRadioButton.last().check();
  await okayBtn.click();
  await expect(userRadioButton.last()).toBeChecked();
  await page.pause()
  await userRadioButton.first().check()
  await expect(userRadioButton.last()).not.toBeChecked()
  await termsCheckbox.check();
  await expect(termsCheckbox).toBeChecked()
  await termsCheckbox.uncheck();
  await expect(termsCheckbox).not.toBeChecked()
  
});
