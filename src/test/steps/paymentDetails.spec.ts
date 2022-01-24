import { DataTable } from '@cucumber/cucumber';
import { When } from '@wdio/cucumber-framework';
import paymentDetailsPage from '../../pages/create/fixed/paymentDetails.page';

const defaultTimeout = 20000

When(/^I enter data in Payment details$/, async(table: DataTable) => {
    await paymentDetailsPage.currencySelect.waitForDisplayed({ timeout: defaultTimeout })
    await paymentDetailsPage.clickDropdownOnPaymentDetails("Currency")
    await paymentDetailsPage.selectFromDropdown(table.rows().at(0)[0])
    await paymentDetailsPage.setPaymentRate(table.rows().at(0)[1])
    await paymentDetailsPage.clickDropdownOnPaymentDetails("Payment Frequency")
    await paymentDetailsPage.selectFromDropdown(table.rows().at(0)[2])
    await paymentDetailsPage.clickOnNext()
})
