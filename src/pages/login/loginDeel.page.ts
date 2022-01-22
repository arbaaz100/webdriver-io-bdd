import BasePage from "../BasePage"

class DeelLoginPage extends BasePage {

    get email() { return $("//input[@name='email']") }
    get password() { return $("//input[@type='password']") }
    get loginButton() { return $("//button[@type='submit']") }
    get signUpButton() { return $("//button[@class='button login-signup-link']") }
    get forgotPassword() { return $("//button[@class='button login-reset-pass-link']") }
    get pageHeader() { return $("//h1") }

    async loginByValidUser(emailAddress: string, password: string) {
        await this.isElementDisplayed(this.email)
        await this.setData(this.email, emailAddress)
        await this.setData(this.password, password)
        await this.clickElement(this.loginButton)
    }

}
export default new DeelLoginPage()