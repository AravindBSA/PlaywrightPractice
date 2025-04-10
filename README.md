# Playwright Automation Project

## Project Structure

```
practice/
│
├── .github/              # GitHub-specific files (e.g., workflows)
├── node_modules/         # Project dependencies (auto-generated)
├── playwright-report/    # Auto-generated test reports
├── test-results/         # Auto-generated test artifacts (screenshots, videos, traces)
├── tests/                # ✅ Test specifications (test cases)
├── pages/                # 📄 Page Object Models (POM classes)
├── utils/                # 🛠️ Helper/utility functions
├── fixtures/             # 🎣 Test data, setup, teardown hooks (optional)
├── playwright.config.ts  # 🛠️ Playwright configuration file
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation (this file)
```

## Folder/Files Purpose

| Folder/File           | Purpose                                           | Example files                  |
|-----------------------|---------------------------------------------------|---------------------------------|
| `tests/`              | Test specifications (actual test cases)          | `login.spec.ts`, `checkout.spec.ts` |
| `pages/`              | Page Object Models (POM classes)                 | `LoginPage.ts`, `HomePage.ts`   |
| `utils/`              | Utility/helper methods                           | `generateData.ts`, `customWaits.ts` |
| `fixtures/` (optional) | Test data, setup, and teardown hooks             | `testData.ts`, `baseTest.ts`    |
| `playwright.config.ts` | Global configuration for Playwright             | Timeout, browser settings, baseURL, etc. |
| `package.json`        | Project dependencies and scripts                | Playwright, TypeScript, etc.    |
| `playwright-report/`  | Auto-generated test reports by Playwright       | HTML reports                    |


## Key Files

- **`playwright.config.ts`**:
  - Setup for browsers, baseURL, timeout, retries, etc.
  - Similar to Selenium's `testng.xml` or `pom.xml`.

- **`package.json`**:
  - Lists project dependencies (Playwright, TypeScript, etc.).
  - Contains scripts to run your tests.

- **`README.md`**:
  - Project overview and structure explanation (this file).

## How to Run the Tests

1. Install dependencies:

```bash
npm install
```

2. Run all tests:

```bash
npx playwright test
```

3. View the report:

After running tests, view the Playwright report:

```bash
npx playwright show-report
```


## Notes

- Keep your test files inside the `tests/` folder.
- Create one Page Object Model class per page inside `pages/`.
- Use the `utils/` folder for any helper functions.
- Optionally use the `fixtures/` folder for test data management and hooks.

---

