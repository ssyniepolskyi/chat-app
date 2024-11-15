import LoginPage from '../pages/loginPage';
import { testData } from '../../utils/testData';

describe('User Authentication', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit('/login');
  });

  it('should log in successfully with valid credentials', () => {
    loginPage.login(testData.validUser.username, testData.validUser.password);
    cy.url().should('include', '/chat');
    cy.contains('Chat Room').should('be.visible');
  });

  it('should display error for incorrect password', () => {
    loginPage.login(testData.validUser.username, 'WrongPass123');
    cy.get(loginPage.errorMessage).should('contain', 'Login failed. Please check your username and password.')
    cy.get('.error-message .close-button').click();
    cy.get('.error-message').should('not.exist');
    cy.url().should('include', '/login');
  });

  it('should display error when username is empty', () => {
    loginPage.enterPassword(testData.validUser.password);
    loginPage.clickLogin();
    cy.get(loginPage.errorMessage).should('contain', 'Login failed. Please check your username and password.')
  });

  it('should display error when password is empty', () => {
    loginPage.enterUsername(testData.validUser.username);
    loginPage.clickLogin();
    cy.get(loginPage.errorMessage).should('contain', 'Login failed. Please check your username and password.')
  });

  it('should display error when both fields are empty', () => {
    loginPage.clickLogin();
    cy.get(loginPage.errorMessage).should('contain', 'Login failed. Please check your username and password.')
  });
});
