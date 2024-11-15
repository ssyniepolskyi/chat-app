import LoginPage from '../pages/loginPage';
import ChatPage from '../pages/chatPage';
import { testData } from '../../utils/testData';

describe('Chat Functionality', () => {
  const loginPage = new LoginPage();
  const chatPage = new ChatPage();

  beforeEach(() => {
    loginPage.visit('/login');
    loginPage.login(testData.validUser.username, testData.validUser.password);
    cy.url().should('include', '/chat');
  });

  it('should send a message successfully', () => {
    const messageText = 'Hello dear friends';
    chatPage.sendMessage(messageText);
    chatPage.getLatestMessage().should('contain', messageText);
  });

  it('should not send an empty message and display error', () => {
    chatPage.clickSend();
    chatPage.getErrorMessage().should('contain', 'Cannot send an empty message.');
  });

  it('should display message history', () => {
    chatPage.getLatestMessage().should('exist');
  });

  it('should log out successfully', () => {
    chatPage.clickLogout();
    cy.url().should('include', '/login');
  });

  it('should redirect to login if accessing chat without login', () => {
    cy.clearLocalStorage();
    chatPage.visit('/chat');
    cy.url().should('include', '/login');
  });
});
