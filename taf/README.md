# Chat Application Testing Suite

## Overview
This repository contains the automated test suite for a chat application using Cypress. The tests cover user authentication (login, registration, and logout), as well as chat functionality (sending messages, viewing message history). This project implements behavior-driven design (BDD) to ensure that each feature meets user requirements and performs as expected.

## Prerequisites

- **Node.js** (Version 18 or higher)
- **npm** (Node Package Manager)
- **Cypress** (Version 13 or higher)
- **Chat Application** running locally on `http://localhost:3000`

## Project Structure

- **cypress/e2e/pages/**: Contains page object classes representing each page.
- **cypress/e2e/tests/**: Contains test scripts.
- **cypress/support/**: Contains custom configurations.
- **cypress/utils/**: Contains additional test data.
- **features/**: Contains BDD feature files.

## Setup Instructions

1. Navigate to the Project Directory `cd taf`
2. Install Dependencies `npm install`
3. Ensure the Chat Application is Running 
4. Start your chat application on http://localhost:3000. (if not started)
5. Ensure that the backend server is running and connected to the database.
6. Run Tests
- Run All Tests in Interactive Mode: `npm run cypress:open`
- Run All Tests in Headless Mode: `npm test`
- Run a specific test file in headless mode: `npx cypress run --spec "cypress/e2e/tests/auth.spec.js"`
- Run Tests in a Specific Browser: `npx cypress run --browser chrome`

## Writing Tests
Tests are located in the cypress/e2e/tests/ directory.
Page Object Model (POM) are located in the cypress/e2e/pages/ to interact with the application.
Test data is stored in cypress/utils/testData.js and cypress/fixtures/users.json.
Import and use it in your tests and page objects.
Configuration is defined in cypress.config.js.
Screenshots are saved in cypress/screenshots/.
Videos are saved in cypress/videos/.

## Troubleshooting
### Tests Failing Unexpectedly
1. Ensure that the Chat Application is running and accessible at http://localhost:3000.
2. Check for any errors in the application logs.

### Element Not Found Errors
1. Verify that the data-test-id attributes in the frontend code match the selectors used in the page objects.
2. Ensure the application UI hasn't changed in a way that affects the tests.
