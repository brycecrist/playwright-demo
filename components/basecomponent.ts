import { expect, Locator, Page } from "@playwright/test";

export abstract class BaseComponent {

    mainLocator: Locator

    constructor(mainLocator: Locator) {
        this.mainLocator = mainLocator
    }

    async isDisplayed() {
        await expect(this.mainLocator).toBeVisible()
    }
}