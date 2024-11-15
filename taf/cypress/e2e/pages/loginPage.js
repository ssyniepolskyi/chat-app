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
    cy.get(this.usernameInput).clear().type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;
