import test from "@playwright/test";
import { LoginPage } from "../pages/loginpage";

test.describe('Verify the Login Functionality', () => {
    test('Verify that the user can enter a value into the username field', 
    async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.navigate()
        await loginPage.usernameField.enterText('standard_user')
        await loginPage.usernameField.verifyEnteredText()
    })
})