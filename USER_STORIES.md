# User Stories for backend and frontend to make the application more functional and provide wider coverage by automated tests.

## User Stories (Frontend)
1. The user should be able to log in with an existing username and password.
2. The user should be able to register a new account.
3. After successful login, the user must be able to send messages.
4. After successful login, the user should be able to see the history of messages from other users.
5. A sent message from the user should be displayed on the page.
6. Messages in the chat should contain the user's name, time of sending and the text of the message. 
7. Users should be able to leave the chat and go to the authorization page.

## User stories (Backend) 
1. It should be possible to accept login requests. 
2. It should be possible to reject login requests if the username and password are incorrect. 
3. It should be possible to accept registration requests. 
4. It should be able to reject registration requests if the username is already registered.
5. It should be able to reject registration requests if the password and confirmation pair does not match. 
6. Whenever the server receives a message from a user, it should be stored in the database.

