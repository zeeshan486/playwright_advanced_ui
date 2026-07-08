import { test as base } from "@playwright/test";
import { MultipleWindowsPage } from "../pages/MultipleWindowsPage";
import {UploadPage} from "../pages/UploadPage"
import { DownloadPage } from "../pages/DownloadPage"
type PageFixture = {

    multipleWindowsPage: MultipleWindowsPage;
    uploadPage : UploadPage,
    downloadPage:DownloadPage

};

export const test = base.extend<PageFixture>({

    multipleWindowsPage: async ({ page }, use) => {

        const multipleWindowsPage = new MultipleWindowsPage(page);

        await use(multipleWindowsPage);

    },

    uploadPage : async({page},use)=>{
        const uploadPage = new UploadPage(page)
        use(uploadPage)
    },
    downloadPage : async({page},use)=>{
        const downloadPage =new DownloadPage(page)
        use(downloadPage) 
    }



});

export { expect } from "@playwright/test";