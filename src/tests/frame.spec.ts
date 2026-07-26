import { test, expect } from "../fixtures/pageFixture";
import { frameData } from "../test-data/frameData";

test.beforeEach(async ({ framePage }) => {

    await framePage.navigate("/iframe");

});

// test("TC-01 Handle Single iFrame", async ({ framePage }) => {

//     await framePage.enterText(frameData.editorText);

//     expect(await framePage.getEditorText())
//         .toBe(frameData.editorText);

// });

test("TC-02 Verify Text Inside iFrame", async ({ framePage }) => {

    expect(await framePage.getEditorText())
        .toBe(frameData.defaultText);

});