Feature: User Registration Functionality
  As a user
  I want to be able to register for the chat application
  So that I can login to the chat

  Background:
    Given I am on the Register page
  
  Scenario: Successful user registration
    When I navigate to the registration page
    And I enter a unique username "newuser", password "NewPass@123", and confirm the password
    And I click on the "Register" button
    Then I should be redirected to the login page

  Scenario Outline: Unsuccessful registration attempts
    When I navigate to the registration page
    And I enter username "<username>", password "<password>", and confirm password "<confirm_password>"
    And I click on the "Register" button
    Then I should see an error message "<error_message>"

    Examples:
      | username    | password     | confirm_password | error_message                                            |
      | testuser    | AnyPass123   | AnyPass123       | Registration failed. Please choose a different username. |
      | uniqueuser  | Pass@123     | Pass@321         | Passwords do not match.                                  |
      |             | Pass@123     | Pass@123         | Username cannot be empty.                                |
      | uniqueuser  |              |                  | Password cannot be empty.                                |
      |             |              |                  | Username and password cannot be empty.                   |
