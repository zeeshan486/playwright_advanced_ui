import path from "path";
import { Download, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DownloadPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private getDownloadLink(fileName: string): Locator {
        return this.page.getByRole("link", { name: fileName });
    }

    private async waitForDownload(fileName: string): Promise<Download> {

        const downloadPromise = this.page.waitForEvent("download");

        await this.getDownloadLink(fileName).click();

        return await downloadPromise;
    }

    async downloadFile(fileName: string): Promise<string> {

        const download = await this.waitForDownload(fileName);

        return download.suggestedFilename();

    }

    async saveDownloadedFile(fileName: string,downloadDirectory: string): Promise<string> {

        const download = await this.waitForDownload(fileName);

        const savePath = path.join(downloadDirectory, fileName);

        await download.saveAs(savePath);

        return savePath;
    }

}