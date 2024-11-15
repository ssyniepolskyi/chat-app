Feature: User Registration Functionality
  As a user
  I want to be able to register for the chat application
  So that I can login to the chat

  Background:
    Given I am on the Login page
  
  Scenario: Successful user registration
    When I navigate to the registration page
    And I enter a unique username "newuser", password "NewPass@123", and confirm the password
    And I click on the "Register" button
    Then I should be redirected to the login page

  Scenario Outline: Unsuccessful registration attempts
    When I navigate to the registration page
    And I enter username "<username>", password "<password>", and confirm password "<confirm_password>"
    And I click on the "Register" button
    Then I should see an error message "<error_message>" on the register form

    Examples:
      | username    | password     | confirm_password | error_message                                            |
      | testuser    | AnyPass123   | AnyPass123       | Error registering user. User may already exist.          |
      | uniqueuser  | Pass@123     | Pass@321         | Passwords don't match                                    |
      |             | Pass@123     | Pass@123         | Password and Username fields should not be empty         |
      | uniqueuser  |              |                  | Password and Username fields should not be empty         |
      |             |              |                  | Password and Username fields should not be empty         |
      
