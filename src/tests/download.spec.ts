import { test, expect } from "../fixtures/pageFixture";
import { downloadFiles } from "../test-data/downloadFiles";
import fs from "fs";
import { downloadConfig } from "../config/downloadConfig";
test.beforeEach(async ({ downloadPage }) => {

    await downloadPage.navigate("/download");

});

test("TC-05 Download File And Verify File Name", async ({ downloadPage }) => {

    const downloadedFileName =
        await downloadPage.downloadFile(downloadFiles.randomData.fileName);
    console.log(downloadedFileName)
    expect(downloadedFileName)
        .toBe(downloadFiles.randomData.fileName);

});

test("TC-06 Download File And Verify It Is Saved", async ({ downloadPage }) => {

    const savedFilePath =await downloadPage.saveDownloadedFile(downloadFiles.randomData.fileName,downloadConfig.downloadFolder);
    expect(fs.existsSync(savedFilePath)).toBeTruthy();

});