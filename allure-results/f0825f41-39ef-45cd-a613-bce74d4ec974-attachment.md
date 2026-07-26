# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frame.spec.ts >> TC-01 Handle Single iFrame
- Location: src\tests\frame.spec.ts:10:5

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('#mce_0_ifr').contentFrame().locator('#tinymce')
    - locator resolved to <body id="tinymce" data-id="mce_0" spellcheck="false" contenteditable="false" class="mce-content-body mce-content-readonly" aria-label="Rich Text Area. Press ALT-0 for help.">…</body>
    - fill("Hello Playwright")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "An iFrame containing the TinyMCE WYSIWYG Editor" [level=3] [ref=e8]
      - application [disabled] [ref=e9]:
        - generic [ref=e10]:
          - generic [ref=e11]:
            - menubar [disabled] [ref=e12]:
              - menuitem "File" [disabled] [ref=e13]:
                - generic [ref=e14]: File
              - menuitem "Edit" [disabled] [ref=e15]:
                - generic [ref=e16]: Edit
              - menuitem "View" [disabled] [ref=e17]:
                - generic [ref=e18]: View
              - menuitem "Format" [disabled] [ref=e19]:
                - generic [ref=e20]: Format
            - group [disabled] [ref=e21]:
              - group [disabled] [ref=e22]:
                - toolbar "history" [disabled] [ref=e23]:
                  - button "Undo" [disabled] [ref=e24]:
                    - img [ref=e26]
                  - button "Redo" [disabled] [ref=e28]:
                    - img [ref=e30]
                - toolbar "styles" [disabled] [ref=e32]:
                  - button "Formats" [disabled] [ref=e33]:
                    - generic [ref=e34]: Paragraph
                    - img [ref=e36]
                - toolbar "formatting" [disabled] [ref=e38]:
                  - button "Bold" [disabled] [ref=e39]:
                    - img [ref=e41]
                  - button "Italic" [disabled] [ref=e43]:
                    - img [ref=e45]
                - toolbar "alignment" [disabled] [ref=e47]:
                  - button "Align left" [disabled] [ref=e48]:
                    - img [ref=e50]
                  - button "Align center" [disabled] [ref=e52]:
                    - img [ref=e54]
                  - button "Align right" [disabled] [ref=e56]:
                    - img [ref=e58]
                  - button "Justify" [disabled] [ref=e60]:
                    - img [ref=e62]
                - toolbar "indentation" [disabled] [ref=e64]:
                  - button "Decrease indent" [disabled] [ref=e65]:
                    - img [ref=e67]
                  - button "Increase indent" [disabled] [ref=e69]:
                    - img [ref=e71]
          - generic [ref=e73]:
            - iframe [ref=e75]:
              - generic "Rich Text Area. Press ALT-0 for help." [active] [ref=f1e1]:
                - paragraph [ref=f1e2]: Your content goes here.
            - complementary
        - generic [ref=e76]:
          - generic [ref=e77]:
            - navigation [ref=e78]
            - link "Powered by Tiny" [disabled] [ref=e80]:
              - /url: https://www.tiny.cloud/?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce&utm_content=v5
          - generic "Resize" [ref=e81]:
            - img [ref=e82]
  - generic [ref=e86]:
    - separator [ref=e87]
    - generic [ref=e88]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e89] [cursor=pointer]:
        - /url: http://elementalselenium.com/
  - alert [ref=e91]:
    - img [ref=e93]
    - paragraph [ref=e96]:
      - generic [ref=e97]: TinyMCE is in read-only mode because you have no more editor loads available this month.
      - generic [ref=e98]:
        - strong [ref=e99]: Please request that the admin
        - text: upgrade your plan
        - text: or add a valid payment method for additional editor load charges.
        - link "Learn more." [ref=e100] [cursor=pointer]:
          - /url: https://www.tiny.cloud/docs/tinymce/latest/usage-based-billing/?utm_campaign=editor_blocked_learn_more&utm_source=tiny&utm_medium=referral
    - button "Close" [ref=e101] [cursor=pointer]:
      - generic "Close" [ref=e102]:
        - img [ref=e103]
```

# Test source

```ts
  1  | import { FrameLocator, Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class FramePage extends BasePage {
  5  |   private readonly editorFrame: FrameLocator;
  6  |   private readonly editorBody: Locator;
  7  | 
  8  |   constructor(page: Page) {
  9  |     super(page);
  10 | 
  11 |     this.editorFrame = page.frameLocator("#mce_0_ifr");
  12 |     this.editorBody = this.editorFrame.locator("#tinymce");
  13 |   }
  14 | 
  15 |   async enterText(text: string): Promise<void> {
> 16 |     await this.editorBody.fill(text);
     |                           ^ Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  17 |   }
  18 | 
  19 | 
  20 |   async getEditorText(): Promise<string> {
  21 |     return (await this.editorBody.innerText())?.trim() ?? "";
  22 |   }
  23 | }
  24 | 
```