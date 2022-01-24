import { When } from '@wdio/cucumber-framework';
import benifitsAndExtraPage from '../../pages/create/fixed/benifitsAndExtra.page';

const defaultTimeout = 20000

When(/^I add a special clause as \"([^\"]*)\"$/, async ( clauseText ) => {
    await benifitsAndExtraPage.addSpecialClause.waitForClickable( { timeout: defaultTimeout })
    await benifitsAndExtraPage.setSpecialClause(clauseText)
})

When(/^I click on Next$/, async() =>{
    await benifitsAndExtraPage.clickOnNext()
})
