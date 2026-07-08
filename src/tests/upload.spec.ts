import {test,expect} from "../fixtures/pageFixture"
import { uploadfiles } from "../test-data/uploadFiles"

test.beforeEach(async({uploadPage})=>{
    await uploadPage.navigate("/upload")
})

test("TC-01 Upload File Using File Chooser",async({uploadPage})=>{

        await uploadPage.uploadFile(uploadfiles.sampleDoc.path)
        await uploadPage.clickUploadButton()
        expect(await uploadPage.getUploadedFileName()).toBe(uploadfiles.sampleDoc.fileName)
})

test("TC-02 Upload File Using Drag And Drop",async({uploadPage})=>{
    await uploadPage.uploadFileByDragAndDrop([uploadfiles.sampleDoc.path,uploadfiles.image.path])
    expect(await uploadPage.getDraggedFileName()).toEqual([uploadfiles.sampleDoc.fileName,uploadfiles.image.fileName])

})

test("TC-03 Upload Without Selecting A File",async({uploadPage})=>{

        await uploadPage.clickUploadButton()
        expect(await uploadPage.getTitle()).toBe("Internal Server Error")
})

test("TC-04 Upload New File Replaces Existing Upload",async({uploadPage})=>{

        await uploadPage.uploadFile(uploadfiles.sampleDoc.path)
         await uploadPage.uploadFile(uploadfiles.image.path)
        await uploadPage.clickUploadButton()
        expect(await uploadPage.getUploadedFileName()).toBe(uploadfiles.image.fileName)
})