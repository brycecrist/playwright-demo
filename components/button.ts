import { expect, Locator } from "@playwright/test";
import { BaseComponent } from "./basecomponent";

export class Button extends BaseComponent {

    constructor(mainLocator: Locator) {
        super(mainLocator)
    }

    async verifyText(text: string) {
        await expect(this.mainLocator).toHaveText(text)
    }

    async click() {
        await this.mainLocator.click()
    }
}