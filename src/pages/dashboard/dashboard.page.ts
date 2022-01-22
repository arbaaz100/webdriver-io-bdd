import BasePage from "../BasePage"

class DashboardPage extends BasePage {

    get pageHeader() { return $("//h1") }
    get allSideElements() { return $$("p.sidebar-option-p") }
    get logout() { return $("//div[@data-original-title='Logout']/button") }

    async clickOnSideElement(elmt: string) {
        await this.clickElement(this.allSideElements[0].$(elmt))
    }

}
export default new DashboardPage()