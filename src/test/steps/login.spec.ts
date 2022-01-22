import { Given, When, Then } from '@wdio/cucumber-framework';
import faker from "faker"
import testData from '../../data/signup.json'
import signinPage from '../../pages/signin.page'
import loginPage from '../../pages/login/loginDeel.page'
import { waitUntilCondition } from '../../utils/WaitUtils';


Given(/^I am on the Deel Login page$/, async() => {
    await signinPage.openApplication()
});

When(/^I log in with valid credentials$/, async() => {
    await expect(loginPage.email).toBeDisplayed()
    await loginPage.loginByValidUser("arbaaz.khan@deel.com", "Password@123")
});

Given(/^I am on the home page of automation practice website$/, async () => {
  await signinPage.openApplication()
});

When(/^I click on sign in button$/, async () => {
  await signinPage.clickOnSingIn()
});

Then(/^I must be navigated to my account page with header as \"([^\"]*)\"$/, async (authentication) => {
  await expect(signinPage.AuthHeader).toHaveText(authentication)
});

When(/^I enter email address and click on create account$/, async () => {
  await createaccountPage.proceedToCreateAccount(faker.internet.email())
});

Then(/^I should see page header text as \"([^\"]*)\"$/, async (createanaccount) => {
  await expect(createaccountPage.pageHeader).toHaveText(createanaccount)
});

When(/^I fill all mandatory fields and click on register button$/, async () => {
  await personalInfoPage.clickTitle()
  await personalInfoPage.setFirstAndLastName(testData.names)
  await personalInfoPage.setPassword(faker.internet.password(8))
  await personalInfoPage.selectDateOfBirth(testData.dateOfBirth)
  await personalInfoPage.clickCheck()
  await personalInfoPage.setCompany(testData.company)
  await personalInfoPage.setAddress(testData.address)
  await personalInfoPage.setMobileNumber(testData.mobileNumber)
  await personalInfoPage.setAliasAddress(testData.aliasAdd)
  await personalInfoPage.clickRegister()
});

Then(/^I should be navigated to \"([^\"]*)\" page$/, async (pageHeader) => {
  await expect(personalInfoPage.headerElement).toHaveText(pageHeader)
});

When(/^I click on Women item and add dress to cart$/, async () => {
  await myaccountPage.WomenItem.click()
  await womenPage.addProductToCartFromWomenMenu()
});

Then(/^I should see product added message as \"([^\"]*)\"$/, async (addedToCartMsg) => {
  await expect(womenPage.productAdded).toHaveText(addedToCartMsg)
});

When(/^I click on proceed to checkout$/, async () => {
  await womenPage.proceedToCheckOut()
});

Then(/^I should see the shopping cart header as \"([^\"]*)\"$/, async (shoppingcartsummary) => {
  await expect(shoppingcartPage.shoppingCart).toHaveTextContaining(shoppingcartsummary)
});

When(/^I click on proceed to checkout button$/, async () => {
  await shoppingcartPage.proceedToCheckout()
});

Then(/^I should see address header as \"([^\"]*)\"$/, async (addresses) => {
  await expect(addressPage.addressHeader).toHaveText(addresses)
});

When(/^I should click proceed to checkout$/, async () => {
  await addressPage.proceedToCheckout()
});

Then(/^I should be navigated to shipping page and see the header as \"([^\"]*)\"$/, async (shipping) => {
  await expect(shippingPage.shippingPage).toHaveText(shipping)
});

When(/^I check terms and conditions and click on proceed to checkout$/, async () => {
  await shippingPage.selectTermAndProceedToCheckout()
});

Then(/^I should see paymet method header as \"([^\"]*)\"$/, async (choosePaymentMethod) => {
  await expect(paymentPage.paymentHeader).toHaveText(choosePaymentMethod)
});

When(/^I select payment option and confirm order$/, async () => {
  await paymentPage.selectPaymentType()
  await orderPage.clickOnConfirmOrder()
});

Then(/^I should see header as \"([^\"]*)\"$/, async (orderconfirmation) => {
  await expect(orderPage.orderConfirmed).toHaveText(orderconfirmation)
});