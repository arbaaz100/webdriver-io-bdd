import BasePage from "../../BasePage"

class CompliancePage extends BasePage {

    get deelContract() { return $("//div[@data-qa='tab-button-0']") }
    get ownContract() { return $("//div[@data-qa='tab-button-0']") }
    get withholdingTax() { return $("toggle-23") }
    get complainceDocuments() { return $("//label[@data-qa='compliance-documents-checkbox']") }
    get deelPremium() { return $("//label[@data-qa='toggleDeelPremium']") }
    get createContract() { return $("//button[@data-qa='create-contract']") }
}
export default new CompliancePage()