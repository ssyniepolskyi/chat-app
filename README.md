# Chat App with Automated Testing

## Project Structure

- `backend/` - Backend server (Node.js + Express).
- `frontend/` - Frontend application (React).
- `cypress/` - Cypress end-to-end testing suite with BDD.

## Setup Instructions

1. **Backend Setup**
   - Navigate to the `backend` folder.
   - Run `npm install` to install dependencies.
   - Start the server with `npm start`.

2. **Frontend Setup**
   - Navigate to the `frontend` folder.
   - Run `npm install` to install dependencies.
   - Start the React application with `npm start`.

3. **Database**
   - Ensure MongoDB is running locally on `mongodb://localhost:27017/chatapp`.

4. **Cypress Tests**
   - Run `npx cypress open` to launch Cypress and run tests in the UI.
   - All tests are written in BDD format using Gherkin syntax.

## Running Tests

To run all tests, open Cypress and select the feature file in `cypress/integration/chat_app.feature`.

## User Stories

- **Login** - Users can log in with predefined credentials.
- **Chat** - Logged-in users can send messages and view chat history.

## Requirements

- Node.js, MongoDB, React, Cypress
