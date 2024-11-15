class BasePage {
  constructor() {
    this.errorMessage = '[data-test-id="error-message"]';
  }

  visit(path = '/') {
    cy.visit(path);
  }
}

export default BasePage;
