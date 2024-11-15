# cypress/e2e/features/login/login.feature

Feature: User Login Functionality
  As a user
  I want to be able to log in to the chat application
  So that I can interact with other users

  Background:
    Given I am on the Login page

  Scenario: Successful log in with valid credentials
    When I enter username "user123" and password "Test@123"
    And I click on the "Login" button
    Then I should be redirected to the chat room

  Scenario Outline: Unsuccessful login attempts
    When I enter username "<username>" and password "<password>"
    And I click on the "Login" button
    Then I should see an error message "<error_message>" on the login form

    Examples:
      | username        | password       | error_message                                          |
      | testuser        | WrongPass123   | Login failed. Please check your username and password. |
      | nonexistentuser | AnyPassword123 | Login failed. Please check your username and password. |
      |                 | Test@123       | Login failed. Please check your username and password. |
      | testuser        |                | Login failed. Please check your username and password. |
      |                 |                | Login failed. Please check your username and password. |
