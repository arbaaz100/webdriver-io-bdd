import { When, Then } from '@wdio/cucumber-framework';
import dashboardPage from '../../pages/dashboard/dashboard.page';
import createContractPage from '../../pages/create/createContract.page';

const defaultTimeout = 30000
const heading = "Contract Type"
const contracts = "Contracts"

When(/^I go to \"([^\"]*)\"$/, async (option) => {
    await dashboardPage.clickOnSideElement(option)
});

Then(/^I validate that \"([^\"]*)\" contract is created successfully$/, async (option) => {
    await dashboardPage.clickOnSideElement(contracts)
    await createContractPage.contractHeader.waitForDisplayed({ timeout: defaultTimeout })
    await expect(createContractPage.contractText).toHaveTextContaining(option)
});

Then(/^I validate that I am on Contract Type Page$/, async() => {
    await dashboardPage.pageHeader.waitForDisplayed({ timeout: defaultTimeout })
    await expect(dashboardPage.pageHeader).toHaveTextContaining(heading)
});