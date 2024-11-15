Feature: User Login Functionality
  As a user
  I want to be able to log in for the chat application
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
    Then I should see an error message "<error_message>"

    Examples:
      | username         | password       | error_message                                          |
      | testuser         | WrongPass123   | Login failed. Please check your username and password. |
      | nonexistentuser  | AnyPassword123 | Login failed. Please check your username and password. |
      |                  | Test@123       | Username cannot be empty.                              |
      | testuser         |                | Password cannot be empty.                              |
      |                  |                | Username and password cannot be empty.                 |

  