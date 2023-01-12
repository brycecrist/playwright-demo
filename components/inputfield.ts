import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./basecomponent";

export class InputField extends BaseComponent {

    constructor(mainLocator: Locator) {
        super(mainLocator)
    }

    async enterText(text: string) {
        await this.mainLocator.fill(text)
    }
}