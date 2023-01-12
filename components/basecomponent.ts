import { expect, Locator, Page } from "@playwright/test";

export abstract class BaseComponent {

    mainLocator: Locator

    constructor(mainLocator: Locator) {
        this.mainLocator = mainLocator
    }

    async getText() {
        await this.mainLocator.textContent()
    }

    async isDisplayed() {
        await expect(this.mainLocator).toBeVisible()
    }
}