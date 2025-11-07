import { expect } from '@playwright/test';
import { Page } from 'playwright';

export class BasePage {
    constructor(public page: Page) {}

    async click(locator: string) {
        await this.page.click(locator);
    }

    async type(locator: string, text: string) {
        await this.page.fill(locator, text);
    }

    async navigate(url: string) {
      //  await this.page.waitForTimeout(60000);
         await this.page.goto(url);
     ///    await this.page.waitForTimeout(10000);
    }

 }
