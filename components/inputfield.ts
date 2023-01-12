import { expect, Locator, Page } from "@playwright/test";
import { BaseComponent } from "./basecomponent";

export class InputField extends BaseComponent {

    enteredText: string = ""

    constructor(mainLocator: Locator) {
        super(mainLocator)
    }

    async enterText(text: string) {
        await this.mainLocator.fill(text)
        this.enteredText = text
    }

    async verifyEnteredText() {
        // For input fields, we must check the value, not the textContent
        await expect(this.mainLocator).toHaveValue(this.enteredText)
    }
}