import { Locator, Page } from "@playwright/test";
import { Text } from "../components/text";
import { BasePage } from "./basepage";

export class HomePage extends BasePage {

    url = "https://www.saucedemo.com/inventory.html"

    private productsHeaderTextLocator: Locator

    productsHeaderText: Text

    constructor(page: Page) {
        super(page)

        this.productsHeaderTextLocator = page.locator('#header_container > div.header_secondary_container > span')
        this.productsHeaderText = new Text(this.productsHeaderTextLocator)
    }

    async navigate() {
        await this.page.goto(this.url)
    }

    async isDisplayed() {
        await this.productsHeaderText.verifyText("Products")
    }
}