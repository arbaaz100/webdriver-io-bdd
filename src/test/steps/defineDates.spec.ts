import { DataTable } from '@cucumber/cucumber';
import { When } from '@wdio/cucumber-framework';
import defineDatesPage from '../../pages/create/fixed/defineDates.page';

const defaultTimeout = 20000

When(/^I enter data in Define Dates$/, async(table: DataTable) => {
    await defineDatesPage.firstPaymentDate.waitForDisplayed({ timeout: defaultTimeout })
    if(table.rows().at(0)[0] == "today"){
        await defineDatesPage.setFirstPayment(table.rows().at(0)[1])
    }
    await defineDatesPage.clickOnNext()
})
