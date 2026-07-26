# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frame.spec.ts >> TC-02 Verify Text Inside iFrame
- Location: src\tests\frame.spec.ts:19:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://the-internet.herokuapp.com/iframe", waiting until "load"

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
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  12 |     }
  13 | 
  14 | 
  15 | 
  16 |     
  17 | 
  18 | 
  19 | }
```