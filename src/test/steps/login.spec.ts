import { Given, When, Then } from '@wdio/cucumber-framework';
import testData from '../../data/signup.json'
import signinPage from '../../pages/signin.page'
import loginPage from '../../pages/login/loginDeel.page'
import dashboardPage from '../../pages/dashboard/dashboard.page';

const heading = "Good"
const defaultTimeout = 20000

Given(/^I am on the Deel Login page$/, async() => {
    await signinPage.openApplication()
});

When(/^I log in with valid credentials$/, async() => {
    await loginPage.email.waitForDisplayed({ timeout: defaultTimeout})
    await loginPage.loginByValidUser(testData.user.username, testData.user.password)
});

Then(/^I should see page header as \"([^\"]*)\"$/, async (headerText) => {
  await expect(loginPage.pageHeader).toHaveTextContaining(headerText)
});

Then(/^I validate that I am on Deel Home Page$/, async () => {
  await dashboardPage.viewContracts.waitForDisplayed({ timeout: defaultTimeout})
  await expect(loginPage.pageHeader).toHaveTextContaining(heading)
});
