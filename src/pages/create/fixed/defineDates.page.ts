import BasePage from "../../BasePage"

class PaymentDetailsPage extends BasePage {

    get pageHeader() { return $("//h1") }
    get firstPaymentDate() { return $("(//div[@class='deel-ui__select__indicators css-1wy0on6'])") }
    get fullAmountButton() { return $("(//h4[text()='Full amount'])[1]") }
    get proRataButton() { return $("(//h4[text()='Pro rata'])") }
    get proRataAmount() { return $("//input[@data-qa='pro-rata-amount']") }
    get backButton() { return $("//div[@class='back-button']") }
    get nextButton() { return $("//button[@data-qa='next']") }

    async setFirstPayment(type: string) {
        if(type == "Full amount") {
            this.clickElement(this.fullAmountButton)
        } else {
            this.clickElement(this.proRataButton)
        }
    }

    async clickOnNext() {
        await this.clickElement(this.nextButton)
    }
}
export default new PaymentDetailsPage()