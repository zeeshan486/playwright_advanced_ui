import { test, expect } from "../fixtures/pageFixture";
import { MultipleWindowsPage } from "../pages/MultipleWindowsPage";

test.beforeEach(async ({ multipleWindowsPage }) => {

    await multipleWindowsPage.navigate("/windows")
    expect(await multipleWindowsPage.getHeading()).toBe("Opening a new window")

});

test("TC-01 Open New Window", async ({ multipleWindowsPage }) => {

    const newWindowPage = await multipleWindowsPage.openNewWindow();

    expect(newWindowPage).toBeDefined();

});

test("TC-02 Verify Child Window Heading", async ({ multipleWindowsPage }) => {

    const newWindowPage = await multipleWindowsPage.openNewWindow();

    expect(await newWindowPage.getHeading()).toBe("New Window");

});

test("TC-03 Close Child Window And Return To Parent",async({multipleWindowsPage})=>{
    const newWindowPage = await multipleWindowsPage.openNewWindow();
    await newWindowPage.close();
    expect(await multipleWindowsPage.getHeading()).toBe("Opening a new window");
})