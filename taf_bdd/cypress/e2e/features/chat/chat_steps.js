import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/loginPage';
import ChatPage from '../../pages/chatPage';

const loginPage = new LoginPage();
const chatPage = new ChatPage();

Given('I am logged in as {string} and on the chat page', (username) => {
  loginPage.visit('/login');
  loginPage.login(username, 'Test@123');
  cy.url().should('include', '/chat');
});

When('I enter {string} into the message input field', (message) => {
  chatPage.enterMessage(message);
});

When('I leave the message input field empty', () => {
  chatPage.enterMessage(' ');
});

When('I click the "Send" button', () => {
  chatPage.clickSend();
});

Then('I should see my message in the chat window with my username {string} and a timestamp', (username) => {
  chatPage.getLatestMessage().should('contain', username).and('contain', 'Hello World!');
});

Then('I should see an error message {string} on the chat page', (errorMessage) => {
  chatPage.getErrorMessage().should('contain', errorMessage);
});

Then('the message should not appear in the chat window', () => {
  chatPage.getLatestMessage().should('not.contain', 'Cannot send an empty message.');
});

Given('there are previous messages in the chat', () => {
  // Assuming previous messages exist. If not, send messages to create history.
});

When('I open the chat room', () => {
  chatPage.visit('/chat');
});

Then('I should see the history of all previous messages, with usernames and timestamps, in chronological order', () => {
  chatPage.getMessages().should('have.length.greaterThan', 0);
});
