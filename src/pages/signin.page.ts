import BasePage from "./BasePage"

class SigninPage extends BasePage {

    get signInBtn() { return $("//a[@class='login']") }
    get AuthHeader() { return $("//h1") }

    async openApplication() {
        await super.open("https://app.deel.training/login")
    }

    async clickOnSingIn() {
        await this.clickElement(this.signInBtn)
    }
}
export default new SigninPage()