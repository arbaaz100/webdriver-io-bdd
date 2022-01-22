import BasePage from "../BasePage"

class CreateContractPage extends BasePage {

    get pageHeader() { return $("//h1") }

    async selectContractType(contractType: string) {
        await this.clickElement($(`//h4[contains(text(), '${contractType}')]`))
    }

}
export default new CreateContractPage()