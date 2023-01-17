import { expect, Locator } from "@playwright/test";
import { BaseComponent } from "./basecomponent";

export class Text extends BaseComponent {

    constructor(mainLocator: Locator) {
        super(mainLocator)
    }

    async verifyText(text: string) {
        await expect(this.mainLocator).toHaveText(text)
    }
}