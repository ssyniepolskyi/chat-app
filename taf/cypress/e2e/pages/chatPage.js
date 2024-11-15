import BasePage from './basePage';

class ChatPage extends BasePage {
  constructor() {
    super();
    this.messageInput = 'input[data-test-id="message-input"]';
    this.sendButton = 'button[data-test-id="send-button"]';
    this.messagesContainer = 'div[class="messages-container"]';
    this.logoutButton = 'button[data-test-id="logout-button"]';
  }

  enterMessage(message) {
    cy.get(this.messageInput).clear().type(message);
  }

  clickSend() {
    cy.get(this.sendButton).click();
  }

  sendMessage(message) {
    this.enterMessage(message);
    this.clickSend();
  }

  getLatestMessage() {
    return cy.get(this.messagesContainer).children().last();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
  }
}

export default ChatPage;
