# Playwright TypeScript Learning Fundamentals

This project is a dedicated workspace for mastering **Playwright** with **TypeScript**. It contains foundational labs and exercises to learn end-to-end automation.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

You can use the following commands to run tests:

| Command | Description |
|---------|-------------|
| `npm run test` | Run all tests in headless mode |
| `npm run test:chromium` | Run tests specifically in Chromium |
| `npm run test:headed` | Run tests in headed mode (visible browser) |
| `npx playwright test --debug` | Run tests in debug mode (Playwright Inspector) |
| `npm run show-report` | Open the HTML test report after a run |

## 📁 Project Structure

- `tests/`: Directory containing test specifications.
  - `01_Basics/`: Basic Playwright automation examples.
- `playwright.config.ts`: Playwright configuration file.
- `playwright-report/`: Generated HTML reports (after running tests).

## 📊 Reports

After running tests, a report is automatically generated. To view it, run:
```bash
npm run show-report
```

---
*Happy Testing!* 🎭
