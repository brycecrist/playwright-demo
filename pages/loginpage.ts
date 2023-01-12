import { expect, Locator, Page } from '@playwright/test'
import { BasePage } from './basepage';

export class LoginPage extends BasePage {

    url: string = "https://saucedemo.com"

    constructor(page: Page) {
        super(page)
    }

    async navigate() {
        await this.page.goto(this.url)
    }

    async isDisplayed() {
        
    }
}