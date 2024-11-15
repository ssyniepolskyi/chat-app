Feature: Chat Messaging Functionality
  As a logged-in user
  I want to send and view messages
  So that I can communicate with other users in the chat

  Background:
    Given I am logged in as "user123" and on the chat page

  Scenario: Send a message successfully
    When I enter "Hello World!" into the message input field
    And I click the "Send" button
    Then I should see my message in the chat window with my username "user123" and a timestamp

  Scenario: Send an empty message
    When I leave the message input field empty
    And I click the "Send" button
    Then I should see an error message "Cannot send an empty message." on the chat page
    And the message should not appear in the chat window

  Scenario: View message history
    Given there are previous messages in the chat
    When I open the chat room
    Then I should see the history of all previous messages, with usernames and timestamps, in chronological order
