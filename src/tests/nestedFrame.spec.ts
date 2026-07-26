import { test, expect } from "../fixtures/pageFixture";
import { nestedFrameData } from "../test-data/nestedFrameData";

test.beforeEach(async ({ nestedFramePage }) => {

    await nestedFramePage.navigate("/nested_frames");

});

test("TC-03 Verify Left Nested Frame", async ({ nestedFramePage }) => {

   expect(await nestedFramePage.getFrameText("frame-left"))
    .toBe(nestedFrameData.leftFrameText);


});

test("TC-04 Switch Between Multiple Frames", async ({ nestedFramePage }) => {

   expect(await nestedFramePage.getFrameText("frame-left"))
    .toBe(nestedFrameData.leftFrameText);

expect(await nestedFramePage.getFrameText("frame-middle"))
    .toBe(nestedFrameData.middleFrameText);

expect(await nestedFramePage.getFrameText("frame-right"))
    .toBe(nestedFrameData.rightFrameText);

});