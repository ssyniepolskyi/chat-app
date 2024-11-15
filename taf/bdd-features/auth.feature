Feature: User Login and Registration Functionality
  As a user
  I want to be able to log in or register for the chat application
  So that I can interact with other users

  Background:
    Given I am on the authentication page

  # Login Scenarios
  Scenario: Successful log in with valid credentials
    When I enter username "testuser" and password "Test@123"
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

  # Registration Scenarios
  Scenario: Successful user registration
    When I navigate to the registration page
    And I enter a unique username "newuser", password "NewPass@123", and confirm the password
    And I click on the "Register" button
    Then I should be redirected to the login page
    And see a message "Registration successful. Please log in."

  Scenario Outline: Unsuccessful registration attempts
    When I navigate to the registration page
    And I enter username "<username>", password "<password>", and confirm password "<confirm_password>"
    And I click on the "Register" button
    Then I should see an error message "<error_message>"

    Examples:
      | username    | password     | confirm_password | error_message                                        |
      | testuser    | AnyPass123   | AnyPass123       | Registration failed. Please choose a different username. |
      | uniqueuser  | Pass@123     | Pass@321         | Passwords do not match.                               |
      |             | Pass@123     | Pass@123         | Username cannot be empty.                             |
      | uniqueuser  |              |                  | Password cannot be empty.                             |
      |             |              |                  | Username and password cannot be empty.                |
