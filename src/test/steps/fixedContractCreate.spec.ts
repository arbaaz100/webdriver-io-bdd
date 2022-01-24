import { DataTable } from '@cucumber/cucumber';
import { When, Then } from '@wdio/cucumber-framework';
import createContractPage from '../../pages/create/createContract.page';
import fixedContractPage from '../../pages/create/fixed/fixedContract.page';

const defaultTimeout = 20000

When(/^I go for \"([^\"]*)\" contract creation$/, async(contractType) => {
    await createContractPage.selectContractType(contractType)
});

Then(/^I validate the heading for page is \"([^\"]*)\"$/, async(heading) => {
    await createContractPage.pageHeader.waitForDisplayed({ timeout: defaultTimeout})
    await expect(createContractPage.pageHeader).toHaveTextContaining(heading)
;})

When(/^I enter data in General info$/, async(table: DataTable) => {
    await fixedContractPage.fullForm.waitForDisplayed({ timeout: defaultTimeout })

    console.log("--->"+table.rows().at(0))
    await fixedContractPage.setEntityOnFixedContractPage("Contract name", table.rows().at(0)[1])
    await fixedContractPage.clickDropdownOnFixed("Tax Residence")
    await fixedContractPage.selectFromDropdown(table.rows().at(0)[2])
    await fixedContractPage.clickDropdownOnFixed("State")
    await fixedContractPage.selectFromDropdown(table.rows().at(0)[3])
    await fixedContractPage.setEntityOnFixedContractPage("Job title", table.rows().at(0)[4])
    await fixedContractPage.clickDropdownOnFixed("Seniority Level")
    await fixedContractPage.selectFromDropdown(table.rows().at(0)[5])
    await fixedContractPage.setScopeOfWork(table.rows().at(0)[6])
    await fixedContractPage.selectYesterdayDate(table.rows().at(0)[7])
    await fixedContractPage.clickOnNext()
})
