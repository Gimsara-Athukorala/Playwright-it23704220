# Playwright Test Suite - Assignment 1

This project contains automated test cases for **SwiftTranslator**, a Sinhala text transliteration tool. The tests are built using **Playwright**, a modern end-to-end testing framework.

## Project Overview

The test suite consists of two main test specifications:
- **simple.spec.js** - Basic sanity tests
- **transliteration.spec.js** - Comprehensive SwiftTranslator transliteration tests with 34 test cases

## Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd assign/Assigment1
```

2. Install dependencies:
```bash
npm install
```

This will install:
- `@playwright/test@^1.58.0` - Playwright testing framework
- `@types/node@^25.0.10` - TypeScript types for Node.js

## Project Structure

```
Assigment1/
├── tests/
│   ├── simple.spec.js           # Basic sanity test cases
│   └── transliteration.spec.js  # SwiftTranslator transliteration tests
├── playwright.config.js         # Playwright configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

## Configuration

The **playwright.config.js** file is configured with the following settings:

### Test Execution
- **Test Directory**: `./tests`
- **Sequential Execution**: Tests run one by one (workers: 1)
- **Headless Mode**: Disabled - Browser window opens visually during test execution
- **Slow Motion**: 1000ms delay between actions for visibility

### Reporting & Evidence Collection
- **Reporter**: HTML report for test results
- **Trace**: Enabled - Records test execution traces
- **Video**: Enabled - Records video of test execution
- **Screenshots**: Enabled - Captures screenshots on failure

### Retry & CI Settings
- **Retries**: 0 in local environment, 2 in CI environment
- **Forbid Only**: Enforced in CI to prevent accidental `test.only` commits

### Supported Browsers
- **Chromium** (configured as default)
- Firefox and WebKit can be enabled by uncommenting in the config

## Test Cases

### 1. Simple Sanity Tests (simple.spec.js)
Basic validation to ensure the test environment is working correctly.

### 2. SwiftTranslator Tests (transliteration.spec.js)
Comprehensive test suite for Sinhala text transliteration with **34 test scenarios**:

#### Positive Functional Tests (24 cases)
Tests that verify correct transliteration from Roman script to Sinhala script:
- Basic sentences: "mama paasal yanavaa" → "මම පාසල් යනවා"
- Questions and responses
- Various Sinhala phrases with mixed content
- Proper nouns and foreign words mixed with Sinhala

#### Negative Functional Tests (10 cases)
Edge cases and error handling:
- Invalid characters and special symbols
- Pure English text
- Numbers and emojis
- Empty inputs and whitespace handling
- Long text passages
- Mixed content validation

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/simple.spec.js
npx playwright test tests/transliteration.spec.js
```

### Run Tests in UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run with Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox    # if enabled
npx playwright test --project=webkit     # if enabled
```

## Test Reports

After running tests, results are available in:
- **HTML Report**: `./playwright-report/index.html`
- **Test Results**: `./test-results/` directory containing:
  - Screenshots
  - Video recordings
  - Trace files

To view the HTML report:
```bash
npx playwright show-report
```

## Test Output

Expected output directories:
- `playwright-report/` - HTML test report with interactive results
- `test-results/` - Raw test result data including videos, screenshots, and traces

## Key Features

✓ **Automated Testing** - Full end-to-end test automation  
✓ **Visual Debugging** - Headless mode disabled for visual feedback  
✓ **Evidence Collection** - Traces, videos, and screenshots for each test  
✓ **Sequential Execution** - Tests run one at a time for stability  
✓ **Comprehensive Scenarios** - 34 test cases covering positive and negative paths  
✓ **HTML Reporting** - Detailed test results with visual artifacts  

## Troubleshooting

### Browser Installation
If browsers are not installed, install them using:
```bash
npx playwright install
```

### Port Conflicts
If you get a port conflict error, ensure no other processes are using the test ports.

### Slow Test Execution
The tests are configured with 1000ms slow motion by default. Adjust in `playwright.config.js` if needed:
```javascript
slowMo: 500, // or 0 to disable
```

## Notes

- Tests are designed to run with **Chromium** by default
- The test timeout is set to **180 seconds (3 minutes)** per test
- All tests run sequentially for predictable execution order
- Evidence (traces, videos, screenshots) is automatically collected

## License

ISC

## Author

IT23704220
