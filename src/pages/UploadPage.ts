import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class UploadPage extends BasePage {

    private uploadButton:Locator
    private uploadFileInput :Locator
    private uploadFileName:Locator
    private dragFileName :Locator
    private dragFileInput : Locator
    private title : Locator


    constructor(page:Page){
        super(page)
        this.uploadButton = page.getByRole("button",{name:"Upload"})
        this.uploadFileInput = page.locator('#file-upload')
        this.uploadFileName =  page.locator('#uploaded-files')
         this.dragFileInput =  page.locator('.dz-hidden-input')
        this.dragFileName = page.locator('#drag-drop-upload .dz-filename').locator("span")
       this.title = page.getByRole("heading",{name:"Internal Server Error"})
    }

async uploadFile(filePath:string):Promise<void>{

    await this.uploadFileInput.setInputFiles(filePath)
    
}
async clickUploadButton():Promise<void>{
    await this.uploadButton.click()
}
async getUploadedFileName():Promise<string>{
    const fileName = await this.uploadFileName.textContent()
    return fileName?.trim()??""
}

async uploadFileByDragAndDrop(filePaths: string[]): Promise<void> {
   await this.dragFileInput.setInputFiles(filePaths)
}
async getDraggedFileNames():Promise<string[]>{
    const dragFileName = await this.dragFileName.allTextContents()
    return dragFileName
}

async getPageHeading():Promise<string>{
    const title = await this.title.textContent();
    return title?.trimEnd()??""
}


}