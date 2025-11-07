import { setWorldConstructor } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "playwright";

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor() {
    // Empty constructor allowed
  }
}

setWorldConstructor(CustomWorld);
