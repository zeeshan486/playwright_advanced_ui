import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DynamicControlPage extends BasePage {
  private readonly checkbox: Locator;
  private readonly textbox: Locator;

  constructor(page: Page) {
    super(page);

    this.checkbox = page.getByRole("checkbox");
    this.textbox = page.getByRole("textbox");
  }
  private getActionButton(buttonName: string): Locator {
    return this.page.getByRole("button", {
      name: buttonName,
    });
  }
  async removeCheckbox(): Promise<void> {
    await this.getActionButton("Remove").click();
  }
  async addCheckbox(): Promise<void> {
    await this.getActionButton("Add").click();
  }

  async enableInput(): Promise<void> {
    await this.getActionButton("Enable").click();
  }

  async disableInput(): Promise<void> {
    await this.getActionButton("Disable").click();
  }

  async isCheckboxVisible(): Promise<boolean> {
    return this.checkbox.isVisible();
  }

  async isInputEditable(): Promise<boolean> {
    return this.textbox.isEditable();
  }


  async getSuccessMessage(): Promise<string> {
    const message = this.page.locator("#message");
    return (await message.innerText()).trim() ?? "";
  }
}
