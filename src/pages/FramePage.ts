import { FrameLocator, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FramePage extends BasePage {
  private readonly editorFrame: FrameLocator;
  private readonly editorBody: Locator;

  constructor(page: Page) {
    super(page);

    this.editorFrame = page.frameLocator("#mce_0_ifr");
    this.editorBody = this.editorFrame.locator("#tinymce");
  }

  async enterText(text: string): Promise<void> {
    await this.editorBody.fill(text);
  }


  async getEditorText(): Promise<string> {
    return (await this.editorBody.innerText())?.trim() ?? "";
  }
}
