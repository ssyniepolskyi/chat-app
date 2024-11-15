import BasePage from './basePage';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.usernameInput = 'input[data-test-id="username"]';
    this.passwordInput = 'input[data-test-id="password"]';
    this.loginButton = 'button[data-test-id="login-button"]';
    this.loginRegisterLink = 'p[class="auth-container__link"] > a'
  }

  enterUsername(username) {
    cy.get(this.usernameInput).clear().then(() => {if (username) cy.get(this.usernameInput).type(username, {force: true})})
  }

  enterPassword(password) {
    cy.get(this.passwordInput).clear().then(() => {if (password) cy.get(this.passwordInput).type(password, {force: true})})
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  clickButton(buttonText) {
    cy.contains('button', buttonText).click();
  }  

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }  

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;
