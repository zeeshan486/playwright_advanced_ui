import { test, expect } from "../fixtures/pageFixture";
import { alertData } from "../test-data/alertData";

test.beforeEach(async ({ alertPage }) => {

    await alertPage.navigate("/javascript_alerts");

});

test("TC-01 Handle JavaScript Alert", async ({ alertPage }) => {

    await alertPage.acceptAlert();

    expect(await alertPage.getResultMessage())
        .toBe("You successfully clicked an alert");   

});

test("TC-02 Confirm Accept", async ({ alertPage }) => {

    await alertPage.acceptConfirm()
    expect(await alertPage.getResultMessage()).toBe("You clicked: Ok")    

});

test("TC-03 Confirm Dismiss", async ({ alertPage }) => {


    await alertPage.dismissConfirm()
    expect(await alertPage.getResultMessage()).toBe("You clicked: Cancel")    

});

test("TC-04 Handle Prompt - Accept", async ({ alertPage }) => {

    await alertPage.acceptPrompt(alertData.promptText)
    expect(await alertPage.getResultMessage()).toBe(`You entered: ${alertData.promptText}`)    

});

test("TC-05 Handle Prompt - Dismiss", async ({ alertPage }) => {


    await alertPage.dismissPrompt()
    expect(await alertPage.getResultMessage()).toBe("You entered: null")    

});