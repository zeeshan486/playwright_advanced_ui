# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: download.spec.ts >> TC-05 Download File And Verify File Name
- Location: src\tests\download.spec.ts:11:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://qa.company.com/download
Call log:
  - navigating to "https://qa.company.com/download", waiting until "load"

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
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://qa.company.com/download
  12 |     }
  13 | 
  14 | 
  15 | 
  16 |     
  17 | 
  18 | 
  19 | }
```