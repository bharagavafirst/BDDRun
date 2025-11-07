import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

Before({ timeout: 120000 },async function (this: CustomWorld) {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});



