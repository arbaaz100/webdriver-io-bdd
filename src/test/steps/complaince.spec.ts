import { When } from '@wdio/cucumber-framework';
import complaincePage from '../../pages/create/fixed/compliance.page'
import dashboardPage from '../../pages/dashboard/dashboard.page';

const defaultTimeout = 30000

When(/^I create Deel Contract named \"([^\"]*)\"$/, async ( contractName ) => {
    await complaincePage.deelContract.waitForDisplayed({ timeout: defaultTimeout })
    await complaincePage.clickOnCreateContract()
    await dashboardPage.pageHeader.waitForDisplayed({ timeout: defaultTimeout })
    await expect(dashboardPage.pageHeader).toHaveTextContaining(contractName)
})
