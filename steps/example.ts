import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { expect , Page} from '@playwright/test'
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000); 

let loginPage: LoginPage;

Given('I am on the login page', async function (this: CustomWorld) {
      loginPage = new LoginPage(this.page);
      await loginPage.navigate('https://login.salesforce.com/');
});

When('I login with username {string} and password {string}', async function (this: CustomWorld, user: string, pass: string) {
  loginPage = new LoginPage(this.page);
  await loginPage.login(user, pass);
});

Then('I should see validation message as {string}', async function (this: CustomWorld, valid:string) {
  loginPage = new LoginPage(this.page); 
  await loginPage.getvalidationmesage(valid);
  
});

