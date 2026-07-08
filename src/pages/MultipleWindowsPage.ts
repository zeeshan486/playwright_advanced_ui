import { Locator, Page } from "@playwright/test";
import { NewWindowPage } from "./NewWindowPage";
import { BasePage } from "./BasePage";

export class MultipleWindowsPage extends BasePage {

    private readonly clickHereLink: Locator;
    private readonly heading: Locator;

    constructor(page: Page) {
        super(page)

        this.clickHereLink = page.getByRole("link", {name: "Click Here"});

        this.heading = page.getByRole("heading", {name: "Opening a new window"});
    }

    async openNewWindow(): Promise<NewWindowPage> {

        const popupPromise = this.page.waitForEvent("popup");

        await this.clickHereLink.click();

        const childPage = await popupPromise;

        return new NewWindowPage(childPage);
    }

    async getHeading(): Promise<string> {
        return (await this.heading.textContent())?.trim() ?? "";
    }

}