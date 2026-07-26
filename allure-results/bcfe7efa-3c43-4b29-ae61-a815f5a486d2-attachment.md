# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: download.spec.ts >> TC-05 Download File And Verify File Name
- Location: src\tests\download.spec.ts:11:5

# Error details

```
Error: page.waitForEvent: Test ended.
=========================== logs ===========================
waiting for event "download"
============================================================
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'random_data.txt' })

```

# Test source

```ts
  1  | import path from "path";
  2  | import { Download, Locator, Page } from "@playwright/test";
  3  | import { BasePage } from "./BasePage";
  4  | 
  5  | export class DownloadPage extends BasePage {
  6  | 
  7  |     constructor(page: Page) {
  8  |         super(page);
  9  |     }
  10 | 
  11 |     private getDownloadLink(fileName: string): Locator {
  12 |         return this.page.getByRole("link", { name: fileName });
  13 |     }
  14 | 
  15 |     private async waitForDownload(fileName: string): Promise<Download> {
  16 | 
  17 |         const downloadPromise = this.page.waitForEvent("download");
  18 | 
> 19 |         await this.getDownloadLink(fileName).click();
     |                                              ^ Error: locator.click: Test ended.
  20 | 
  21 |         return await downloadPromise;
  22 |     }
  23 | 
  24 |     async downloadFile(fileName: string): Promise<string> {
  25 | 
  26 |         const download = await this.waitForDownload(fileName);
  27 | 
  28 |         return download.suggestedFilename();
  29 | 
  30 |     }
  31 | 
  32 |     async saveDownloadedFile(fileName: string,downloadDirectory: string): Promise<string> {
  33 | 
  34 |         const download = await this.waitForDownload(fileName);
  35 | 
  36 |         const savePath = path.join(downloadDirectory, fileName);
  37 | 
  38 |         await download.saveAs(savePath);
  39 | 
  40 |         return savePath;
  41 |     }
  42 | 
  43 | }
```