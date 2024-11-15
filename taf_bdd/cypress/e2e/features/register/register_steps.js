import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegisterPage from '../../pages/registerPage';

const registerPage = new RegisterPage();

When('I navigate to the registration page', () => {
  registerPage.clickRegisterLink();
});

When('I enter a unique username {string}, password {string}, and confirm the password', (username, password) => {
  const addRandomChars = str => str + Math.random().toString(36).substr(2, 5);
  registerPage.enterUsername(addRandomChars(username));
  registerPage.enterPassword(password);
  registerPage.enterConfirmPassword(password);
});

Then('I should be redirected to the login page', () => {
  cy.url().should('include', '/login');
  cy.contains('Login').should('be.visible');
});

Then('I should see an error message {string} on the register form', (errorMessage) => {
  registerPage.getErrorMessage().should('contain', errorMessage);
});

When('I enter username {string}, password {string}, and confirm password {string}', (username, password, confirmPassword) => {
  registerPage.enterUsername(username);
  registerPage.enterPassword(password);
  registerPage.enterConfirmPassword(confirmPassword);
});
