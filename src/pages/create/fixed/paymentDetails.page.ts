import BasePage from "../../BasePage"

class PaymentDetailsPage extends BasePage {

    get pageHeader() { return $("//h2") }
    get nextButton() { return $("//button[@data-qa='next']") }
    get scopeOfWork() { return $("//textarea[@name='scope']") }
    get currencySelect() { return $("//div[@data-qa='currency-select']") }
    get paymentRate() { return $("//input[@name='rate']") }
    get paymentFrequency() { return $("//div[@data-qa='cycle-select']") }
    get invoiceCheckbox() { return $("div.deel-ui__checkbox__custom-input") }

    async clickDropdownOnPaymentDetails(option: string) {
        let index: number
        if(option == "Currency") {
            index = 1
        } else if(option == "Payment Frequency") {
            index = 2
        } else if(option == "Cycle Ends") {
            index = 3
        } else if(option == "Payment Due") {
            index = 4
        }
        await this.clickElement($(`(//div[@class='deel-ui__select__indicators css-1wy0on6'])[${index}]`))
    }

    async selectFromDropdown(item: string){
        await this.clickElement($(`//div[text()='${item}']`))
    }

    async setPaymentRate(amount: string) {
        await this.setData(this.paymentRate, amount)
    }

    async clickOnNext() {
        await this.clickElement(this.nextButton)
    }

}
export default new PaymentDetailsPage()