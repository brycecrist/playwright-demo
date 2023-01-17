import { expect, Locator, Page } from '@playwright/test'
import { Button } from '../components/button';
import { InputField } from '../components/inputfield';
import { BasePage } from './basepage';

export class LoginPage extends BasePage {

    url: string = "https://saucedemo.com"

    private usernameFieldLocator: Locator
    private passwordFieldLocator: Locator
    private loginButtonLocator: Locator

    usernameField: InputField
    passwordField: InputField
    loginButton: Button

    constructor(page: Page) {
        super(page)

        this.usernameFieldLocator = page.locator('#user-name')
        this.passwordFieldLocator = page.locator('#password')
        this.loginButtonLocator = page.locator('#login-button')

        this.usernameField = new InputField(this.usernameFieldLocator)
        this.passwordField = new InputField(this.passwordFieldLocator)
        this.loginButton = new Button(this.loginButtonLocator)
    }

    async navigate() {
        await this.page.goto(this.url)
    }

    async isDisplayed() {
        await this.usernameField.isDisplayed()
        await this.passwordField.isDisplayed()
        await this.loginButton.isDisplayed()
    }

    async isNotDisplayed() {
        
    }
}