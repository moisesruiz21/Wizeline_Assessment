import BasePage from './base.page'
import { expect } from 'chai';
import { wait } from './../helpers/waits';
class LoginPage extends BasePage {
    elements: any;
    constructor() {
        super();
        this.elements = {
            get loginLink() {
                return browser.$("a[href='/users/showlogin']")
            },
            get usernameInput() {
                return browser.$("#email")
            },
            get passwordInput() {
                return browser.$("#password")
            },
            get submitButton() { 
                return browser.$("button.submit_btn") 
            },
            get incorrectPasswordMessage() { 
                return browser.$("div.error_msg span") 
            },
        };
    };

    async login(username: string, password: string, isPasswordCorrect: Boolean) {
        await this.waitAndClick(await this.elements.loginLink, 10000);
        await this.waitAndSetValue(await this.elements.usernameInput, username, 10000);
        await this.waitAndSetValue(await this.elements.passwordInput, password, 10000);
        await this.waitAndClick(await this.elements.submitButton, 10000);
        await wait(3000);
        isPasswordCorrect ? expect(await this.elements.incorrectPasswordMessage.isDisplayed()).to.be.false : expect(await this.elements.incorrectPasswordMessage.getText()).to.equal("Wrong email or password.")
    };

    async open(url: string): Promise<void> {
        await this.openURL(url);
    };

}
export default new LoginPage();
