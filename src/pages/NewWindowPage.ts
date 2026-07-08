import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class NewWindowPage extends BasePage {


    private readonly heading: Locator;

    constructor(page: Page) {
        super(page)

        this.heading = page.getByRole("heading", { name: "New Window"});
    }

    async getHeading(): Promise<string> {
        return (await this.heading.textContent())?.trim() ?? "";
    }

    async close():Promise<void>{
        await this.page.close()
    }

}