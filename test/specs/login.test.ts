import LoginPage from '../pages/login.page'
import * as LoginData from "../fixtures/login.data.json";

describe("Login Tests", () => {
    beforeEach(async() => {
        await LoginPage.openURL("")
    });

    afterEach(async() => {
        await browser.reloadSession();
    });
    
    it("Login Successful", async() => {
        await LoginPage.login(LoginData.username, LoginData.password, true);
    });

    it("Login Failure", async() => {
        await LoginPage.login(LoginData.username, LoginData.incorrect_password, false);
    });
});
