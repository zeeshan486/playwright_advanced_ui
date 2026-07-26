# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alert.spec.ts >> TC-02 Confirm Accept
- Location: src\tests\alert.spec.ts:19:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://the-internet.herokuapp.com/javascript_alerts", waiting until "load"

```

```
Error: browserContext.close: Target page, context or browser has been closed
```