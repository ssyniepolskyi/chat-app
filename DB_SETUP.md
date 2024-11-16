# Database setup instructions

## Installing and configuring MongoDB with Docker

### 1. Install MongoDB
Go to the official MongoDB website and download the Community version suitable for your OS. Follow the installer's instructions and select the default settings.

### 2. Start MongoDB.
After installation, MongoDB should automatically start as a service.

### 3. Make sure Docker is installed and running
If necessary, download and install Docker from the official Docker website. Run Docker to make sure it is working.

### 4. Start the MongoDB container
To start MongoDB in Docker, run the following command in a terminal or command line:
`docker run -d --name mongodb -p 27017:27017 mongo:4.4`
This command will create and run a container with MongoDB version 4.4, open port 27017 for local access to the database on your computer. Verify that the container is running by running the command:
`docker ps`

### 5. Connecting to the MongoDB CLI
Connect to MongoDB it via the CLI to configure the database.
`docker exec -it mongodb /bin/bash`
After that, you should have successfully logged in to the mongodb container and have access to the container command line. The following commands are executed directly in the MongoDB container.

### 6. Creating a database and user for the mongo database
`use chatapp` - creates the chatapp database and switches you to it.
`db.createUser({ user: “username”, pwd: “password”, roles: [{ role: “readWrite”, db: “chatapp” }})` - a user will be created for the database
*instead of “username” and “password” substitute the desired username and password.


### 7. Disconnect from the MongoDB CLI
`exit` - exit the container and return to the command line.

### Additional commands
`docker stop mongodb` - stop the MongoDB container
`docker start mongodb` - start the MongoDB container


**After successfully executing these instructions, the MongoDB container is configured to connect to the application**