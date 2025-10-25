import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000); // 60 seconds


Given('I launch google home page', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
});

Then('I see google home page', async () => {
const browser = await chromium.launch();
const context = await browser.newContext();
const page1 = await context.newPage();  
await expect(page1).toHaveURL('https://www.google.com/');
await expect(page1).toHaveTitle('Google');
});

