import {expect, test} from "../fixtures/pageFixture"
import {dynamicControlData} from "../test-data/dynamicControlData"

test.beforeEach(async({dynamicControlPage})=>{

    await dynamicControlPage.navigate("dynamic_controls")



})

test("TC-01 Remove Checkbox and verify success message.",async({dynamicControlPage})=>{

    await dynamicControlPage.removeCheckbox()
    expect(await dynamicControlPage.getSuccessMessage()).toBe(dynamicControlData.checkbox.removeMessage)
    expect(await dynamicControlPage.isCheckboxVisible()).toBeFalsy()

})

test("TC-02 Add Checkbox and verify it appears.", async ({ dynamicControlPage }) => {


    await dynamicControlPage.removeCheckbox();

    await dynamicControlPage.addCheckbox();

    expect(await dynamicControlPage.getSuccessMessage())
        .toBe(dynamicControlData.checkbox.addMessage);

    expect(await dynamicControlPage.isCheckboxVisible())
        .toBeTruthy();

});

test("TC-03 Enable Input Field and verify editable.", async ({ dynamicControlPage }) => {

    // Act
    await dynamicControlPage.enableInput();

    // Assert
    expect(await dynamicControlPage.getSuccessMessage())
        .toBe(dynamicControlData.input.enableMessage);

    expect(await dynamicControlPage.isInputEditable())
        .toBeTruthy();

});

test("TC-04 Disable Input Field and verify disabled.", async ({ dynamicControlPage }) => {

    // Arrange
    await dynamicControlPage.enableInput();

    // Act
    await dynamicControlPage.disableInput();

    // Assert
    expect(await dynamicControlPage.getSuccessMessage())
        .toBe(dynamicControlData.input.disableMessage);

    expect(await dynamicControlPage.isInputEditable())
        .toBeFalsy();

});