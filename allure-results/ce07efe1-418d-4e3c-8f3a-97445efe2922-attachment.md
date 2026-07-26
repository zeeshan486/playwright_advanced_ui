# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multipleWindows.spec.ts >> TC-01 Open New Window
- Location: src\tests\multipleWindows.spec.ts:11:5

# Error details

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for getByRole('heading', { name: 'Opening a new window' })

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { NewWindowPage } from "./NewWindowPage";
  3  | import { BasePage } from "./BasePage";
  4  | 
  5  | export class MultipleWindowsPage extends BasePage {
  6  | 
  7  |     private readonly clickHereLink: Locator;
  8  |     private readonly heading: Locator;
  9  | 
  10 |     constructor(page: Page) {
  11 |         super(page)
  12 | 
  13 |         this.clickHereLink = page.getByRole("link", {name: "Click Here"});
  14 | 
  15 |         this.heading = page.getByRole("heading", {name: "Opening a new window"});
  16 |     }
  17 | 
  18 |     async openNewWindow(): Promise<NewWindowPage> {
  19 | 
  20 |         const popupPromise = this.page.waitForEvent("popup");
  21 | 
  22 |         await this.clickHereLink.click();
  23 | 
  24 |         const childPage = await popupPromise;
  25 | 
  26 |         return new NewWindowPage(childPage);
  27 |     }
  28 | 
  29 |     async getHeading(): Promise<string> {
> 30 |         return (await this.heading.textContent())?.trim() ?? "";
     |                                    ^ Error: locator.textContent: Test ended.
  31 |     }
  32 | 
  33 | }
```