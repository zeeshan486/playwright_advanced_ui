import { test as base } from "@playwright/test";
import { MultipleWindowsPage } from "../pages/MultipleWindowsPage";
import {UploadPage} from "../pages/UploadPage"
import { DownloadPage } from "../pages/DownloadPage"
import { AlertPage } from "../pages/AlertPage";
import { FramePage } from "../pages/FramePage";
import { NestedFramePage } from "../pages/NestedFramePage";
import {DynamicControlPage} from "../pages/DynamicControlPage";
type PageFixture = {

    multipleWindowsPage: MultipleWindowsPage;
    uploadPage : UploadPage,
    downloadPage:DownloadPage,
    alertPage:AlertPage,
    framePage : FramePage
    nestedFramePage : NestedFramePage
    dynamicControlPage : DynamicControlPage

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
        await use(downloadPage) 
    },
    alertPage : async({page},use)=>{
        const alertPage = new AlertPage(page)
        await use(alertPage)
    },
    framePage : async({page},use)=>{
        const framePage = new FramePage(page)
        await use(framePage)
    },
    nestedFramePage : async({page},use)=>{
        const nestedFramePage = new NestedFramePage(page)
        await use(nestedFramePage)
    },
    dynamicControlPage : async({page},use)=>{
        const dynamicControlPage = new DynamicControlPage(page)
        await use(dynamicControlPage) 
    }



});

export { expect } from "@playwright/test";