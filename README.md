# Chat App with Automated Testing

## Prerequisites

- **Node.js** (Version 18 or higher)
- **npm** (Node Package Manager)
- **Cypress** (Version 13 or higher)

## Project Structure

- `server/` - Backend server (Node.js + Express).
- `client/` - Frontend application (React).
- `taf/` - Cypress end-to-end testing framework.
- `taf_bdd/` - Cypress end-to-end testing framework with classic BDD approach.

## Setup Instructions

1. **Backend Setup**
   - Navigate to the `server` folder.
   - Run `npm install` to install dependencies.
   - Start the server with `npm start`.

2. **Client Setup**
   - Navigate to the `client` folder.
   - Run `npm install` to install dependencies.
   - Start the React application with `npm start`.

3. **Database**
   - Ensure MongoDB is running locally on `mongodb://localhost:27017/chatapp`.

4. **Cypress Tests**
   - Here are two different frameworks built on different approaches - `/taf` and `/taf_bdd`
   - More information about running tests for different frameworks can be found in the `README.md` files located in `/taf` and `/taf_bdd`

## Technology stack

- Node.js
- MongoDB
- React
- Cypress
