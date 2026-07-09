import { test as base } from "@playwright/test";
import { MultipleWindowsPage } from "../pages/MultipleWindowsPage";
import {UploadPage} from "../pages/UploadPage"
import { DownloadPage } from "../pages/DownloadPage"
import { AlertPage } from "../pages/AlertPage";
type PageFixture = {

    multipleWindowsPage: MultipleWindowsPage;
    uploadPage : UploadPage,
    downloadPage:DownloadPage,
    alertPage:AlertPage

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
    },
    alertPage : async({page},use)=>{
        const alertPage = new AlertPage(page)
        await use(alertPage)
    }



});

export { expect } from "@playwright/test";