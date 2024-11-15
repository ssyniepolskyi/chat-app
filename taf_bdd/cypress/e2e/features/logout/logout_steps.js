import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/loginPage';
import ChatPage from '../../pages/chatPage';

const loginPage = new LoginPage();
const chatPage = new ChatPage();

Given('I am logged in as {string}', (username) => {
  loginPage.visit('/login');
  loginPage.login(username, 'Test@123');
  cy.url().should('include', '/chat');
});

When('I click the "Logout" button', (buttonText) => {
  chatPage.clickLogout();
});

When('I try to open the chat URL directly', () => {
  chatPage.visit('/chat');
}) 

Then('I should be navigated to the login page', () => {
  cy.url().should('include', '/login');
});

Then('my session should be terminated', () => {
  chatPage.visit('/chat');
  cy.url().should('include', '/login');
});
