import { FrameLocator, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class NestedFramePage extends BasePage {

    private readonly topFrame: FrameLocator;

    constructor(page: Page) {
        super(page);

        this.topFrame = page.frameLocator("[name='frame-top']");

    }

    private getFrameBody(frameName: string): Locator {

    return this.topFrame
        .frameLocator(`[name='${frameName}']`)
        .locator("body");

}

    async getFrameText(frameName: string): Promise<string> {
        return ((await this.getFrameBody(frameName).innerText())?.trim() ?? "");
    }

    

}