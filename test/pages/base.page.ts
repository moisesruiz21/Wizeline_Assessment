export default class BasePage {

    async openURL(PATH: string){
        await browser.url(`https://todoist.com/es/${PATH}`);
    }

    async waitAndClick(element: WebdriverIO.Element, timeout: any) {
        await element.waitForClickable(timeout);
        await element.click();
    }

    async waitAndSetValue(element: WebdriverIO.Element, text: string, timeout: any){
        await element.waitForClickable(timeout);
        await element.setValue(text);
    }
}
