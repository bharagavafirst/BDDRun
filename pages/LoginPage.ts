import { BasePage } from './BasePage';
import { expect} from '@playwright/test'
export class LoginPage extends BasePage {

    username = '#username';
    password = '#password';
    loginButton = '#Login'; 
    validationmessage = '#error';
    url = 'https://login.salesforce.com/';

    async geturl()
    {
     await expect(this.page).toHaveURL(this.url);
    }
  
    async getvalidationmesage(validation:string)
    {
     await expect(this.page.locator(this.validationmessage)).toHaveText(validation);

    }

    async login(user: string, pass: string) {
        await this.type(this.username, user);
        await this.type(this.password, pass);
        await this.click(this.loginButton);
    }

  

    
}