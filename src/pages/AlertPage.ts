import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";

export class AlertPage extends BasePage {
  private readonly result: Locator;

  constructor(page: Page) {
    super(page);

    this.result = page.locator("#result");
  }
private readonly buttons = {
    alert: "Click for JS Alert",
    confirm: "Click for JS Confirm",
    prompt: "Click for JS Prompt"
};


  private getDialogButton(buttonName: string): Locator {
    return this.page.getByRole("button", {
      name: buttonName,
    });
  }

 private async acceptDialog(buttonName:string,promptText?:string):Promise<void>{

    this.page.once('dialog',async(dialog)=>{
        dialog.accept(promptText)
        
    })

    await this.getDialogButton(buttonName).click();
 }

    private async dismissDialog(buttonName:string):Promise<void>{

    this.page.once('dialog',async(dialog)=>{
        dialog.dismiss()
        
    })

    await this.getDialogButton(buttonName).click();
 } 
  

  async acceptAlert(): Promise<void> {
    await this.acceptDialog(this.buttons.alert);
  }

  async acceptConfirm():Promise<void>{
    await this.acceptDialog(this.buttons.confirm)
  }

  async dismissConfirm():Promise<void>{
    await this.dismissDialog(this.buttons.confirm)
  }

  async acceptPrompt(promptText:string):Promise<void>{
    await this.acceptDialog(this.buttons.prompt,promptText)
  }

    async dismissPrompt():Promise<void>{
    await this.dismissDialog(this.buttons.prompt)
  }


  async getResultMessage(): Promise<string> {
    return (await this.result.textContent())?.trim() ?? "";
  }
}
