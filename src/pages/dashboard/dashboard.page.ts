import BasePage from "../BasePage"

class DashboardPage extends BasePage {

    get pageHeader() { return $("//h1") }
    get allSideElements() { return $("p.sidebar-option-p") }
    get viewContracts() { return $("//button[@data-qa='view-my-contracts']") }
    get logout() { return $("//div[@data-original-title='Logout']/button") }

    async clickOnSideElement(elmt: string) {
        await this.clickElement($(`p.sidebar-option-p=${elmt}`))
    }

}
export default new DashboardPage()