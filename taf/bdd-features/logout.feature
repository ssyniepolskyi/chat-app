Feature: User Logout Functionality
  As a logged-in user
  I want to be able to log out from the chat application
  So that my session ends and I return to the login page

  Background:
    Given I am logged in as "testuser"

  Scenario: Successful logout
    When I click the "Logout" button
    Then I should be redirected to the login page
    And my session should be terminated

  Scenario: Access chat without logging in
    Given I am not logged in
    When I try to open the chat URL directly
    Then I should be redirected to the login page