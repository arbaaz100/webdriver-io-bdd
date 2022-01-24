import BasePage from "../../BasePage"

class FixedContract extends BasePage {

    static date: string
    static dateToClick: number

    get pageHeader() { return $("//h1") }
    get nextButton() { return $("//button[@data-qa='next']") }
    get fullForm() { return $("[class='box mb-10 undefined']") }
    get scopeOfWork() { return $("//textarea[@name='scope']") }
    get todaysDate() { return $("div.deel-ui__calendar-input-container__input_content_value") }

    async setEntityOnFixedContractPage(entity: string, value: string) {
        await this.setData($(`//label[contains(text(), '${entity}')]//following-sibling::input`),
            value)
    }

    async setScopeOfWork(value: string) {
        await this.setData(this.scopeOfWork, value)
    }

    async clickOnNext() {
        await this.clickElement(this.nextButton)
    }

    async clickDropdownOnFixed(option: string) {
        let index: number
        if(option == "Entity") {
            index = 1
        } else if(option == "Tax Residence") {
            index = 2
        } else if(option == "State") {
            index = 3
        } else if(option == "Seniority Level") {
            index = 4
        }
        await this.clickElement($(`(//div[@class='deel-ui__select__indicators css-1wy0on6'])[${index}]`))
    }

    async selectFromDropdown(country: string){
        await this.clickElement($(`//div[text()='${country}']`))
    }

    async selectJobTitle(title: string) {
        await this.clickElement($(`//p[@class='suggestions-option'][text()='${title}']`))
    }

    async selectYesterdayDate(date: string) {
        await this.todaysDate.getText().then(function(text) {
            console.log(text)
            FixedContract.date = text
        })
        const day = FixedContract.date.split(',')
        const currentDay = day[0].replace(/\D/g, '')
        if(date == "yesterday") {
            FixedContract.dateToClick = +currentDay - 1
        }
        console.log("DATE -> " + currentDay)
        console.log("YESTERDAY -> " + FixedContract.dateToClick)
        //subtract one day from this and click
        await this.clickElement($("div.deel-ui__calendar-input-container__input_content_value"))
        await this.clickElement($(`//abbr[text()='${FixedContract.dateToClick}']`))
    }


}
export default new FixedContract()