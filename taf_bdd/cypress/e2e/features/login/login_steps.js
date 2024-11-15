import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/loginPage';

const loginPage = new LoginPage();

Given('I am on the Login page', () => {
  loginPage.visit('/login');
});

When('I enter username {string} and password {string}', (username, password) => {
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
});

When('I click on the {string} button', (buttonText) => {
  loginPage.clickButton(buttonText);
});

Then('I should be redirected to the chat room', () => {
  cy.url().should('include', '/chat');
  cy.contains('Chat Room').should('be.visible');
});

Then('I should see an error message {string} on the login form', (errorMessage) => {
  loginPage.getErrorMessage().should('contain', errorMessage);
});
