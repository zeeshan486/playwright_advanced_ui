# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: upload.spec.ts >> TC-04 Upload New File Replaces Existing Upload
- Location: src\tests\upload.spec.ts:27:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/upload", waiting until "load"

```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export class BasePage{
  4  | 
  5  |     constructor(protected page:Page){
  6  |         
  7  |     }
  8  | 
  9  | 
  10 |     async navigate(url:string):Promise<void>{
> 11 |         await this.page.goto(url)
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  12 |     }
  13 | 
  14 | 
  15 | 
  16 |     
  17 | 
  18 | 
  19 | }
```