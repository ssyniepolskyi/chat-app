import RegisterPage from '../pages/registerPage';
import { testData } from '../../utils/testData';

describe('User Registration', () => {
  const registerPage = new RegisterPage();

  beforeEach(() => {
    registerPage.visit('/register');
  });

  it('should register a new user successfully', () => {
    const username = `user${Date.now()}`;
    registerPage.register(username, 'Password@123', 'Password@123');
    cy.url().should('include', '/login');
    cy.contains('Login').should('be.visible');
  });

  it('should display error when passwords do not match', () => {
    registerPage.register('uniqueuser', 'Pass@123', 'Pass@321');
    registerPage.getErrorMessage().should('contain', "Passwords don't match");
  });

  it('should display error when username is already taken', () => {
    registerPage.register(testData.validUser.username, 'AnyPass123', 'AnyPass123');
    registerPage.getErrorMessage().should('contain', 'Error registering user. User may already exist.');
  });

  it('should display error when fields are empty', () => {
    registerPage.clickRegister();
    registerPage.getErrorMessage().should('contain', 'Password and Username fields should not be empty');
  });
});
