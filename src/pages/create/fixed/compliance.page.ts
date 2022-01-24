import BasePage from "../../BasePage"

class CompliancePage extends BasePage {

    get deelContract() { return $("//div[@data-qa='tab-button-0']") }
    get ownContract() { return $("//div[@data-qa='tab-button-0']") }
    get withholdingTax() { return $("toggle-23") }
    get complainceDocuments() { return $("//label[@data-qa='compliance-documents-checkbox']") }
    get deelPremium() { return $("//label[@data-qa='toggleDeelPremium']") }
    get createContract() { return $("//button[@data-qa='create-contract']") }
    get nextButton() { return $("//button[@data-qa='next']") }

    async clickOnNext() {
        await this.clickElement(this.nextButton)
    }

    async clickOnCreateContract() {
        await this.clickElement(this.createContract)
    }
}
export default new CompliancePage()