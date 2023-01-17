import test from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";

test.describe('Verify the Login Functionality', () => {
    test('Verify that the user can enter a value into the username field', 
    async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.navigate()
        await loginPage.usernameField.enterText('standard_user')
        await loginPage.usernameField.verifyEnteredText()
    })

    test('Verify that the user can enter a value into the password field', 
    async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.navigate()
        await loginPage.passwordField.enterText('secret_sauce')
        await loginPage.passwordField.verifyEnteredText()
    })

    test('Verify that the user can login', 
    async ({ page }) => {
        const loginPage = new LoginPage(page)
        const homePage = new HomePage(page)

        await loginPage.navigate()
        await loginPage.usernameField.enterText('standard_user')
        await loginPage.usernameField.verifyEnteredText()
        await loginPage.passwordField.enterText('secret_sauce')
        await loginPage.passwordField.verifyEnteredText()
        await loginPage.loginButton.click()
        
        await homePage.isDisplayed()
    })
})