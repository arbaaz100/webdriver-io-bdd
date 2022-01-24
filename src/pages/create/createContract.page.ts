import BasePage from "../BasePage"

class CreateContractPage extends BasePage {

    get pageHeader() { return $("//h2") }
    get contractHeader() { return $("table-complex-header") }
    get contractText() { return $("color-black semi-bold") }

    async selectContractType(contractType: string) {
        await this.clickElement($(`//h4[contains(text(), '${contractType}')]`))
    }

}
export default new CreateContractPage()