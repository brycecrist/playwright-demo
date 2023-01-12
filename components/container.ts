import { Locator } from "@playwright/test";
import { BaseComponent } from "./basecomponent";

export class Container extends BaseComponent {

    constructor(mainLocator: Locator) {
        super(mainLocator)
    }
}