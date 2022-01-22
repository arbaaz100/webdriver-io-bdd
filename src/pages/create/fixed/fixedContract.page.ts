import BasePage from "../../BasePage"

class FixedContract extends BasePage {

    get pageHeader() { return $("//h1") }
    get scopeOfWork() { return $("//textarea[@name='scope']") }

    async setEntityOnFixedContractPage(entity: string, value: string) {
        await this.setData($(`//label[contains(text(), '${entity}')]//following-sibling::input`),
            value)
    }

    async clickDropdownOnFixed(option: string) {
        let index: number
        if(option == "Entity") {
            index = 1
        } else if(option == "Tax Residence") {
            index = 2
        } else if(option == "Seniority Level") {
            index = 3
        }
        await this.clickElement($(`(//div[@class='deel-ui__select__indicators css-1wy0on6'])[${index}]`))
    }

    async selectFromDropdown(country: string){
        await this.clickElement($(`//div[text()='${country}']`))
    }

    async selectJobTitle(title: string) {
        await this.clickElement($(`//p[@class='suggestions-option'][text()='${title}']`))
    }

    async selectYesterdayDate() {
        await browser.getDeviceTime()
        //subtract one day from this and
        await this.clickElement($("div.deel-ui__calendar-input-container__input_content_value"))
        await this.clickElement($(`//abbr[text()='21']`))
    }


}
export default new FixedContract()