import LoginPage from './loginPage';

class RegisterPage extends LoginPage {
  constructor() {
    super();
    this.confirmPasswordInput = 'input[data-test-id="register-confirm-password"]';
    this.registerButton = 'button[data-test-id="register-button"]';
  }

  enterConfirmPassword(confirmPassword) {
    cy.get(this.confirmPasswordInput).clear().type(confirmPassword);
  }

  clickRegister() {
    cy.get(this.registerButton).click();
  }

  register(username, password, confirmPassword) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.enterConfirmPassword(confirmPassword);
    this.clickRegister();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default RegisterPage;
