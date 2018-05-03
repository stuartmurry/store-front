# store-front

# Setup

Clone the repository on your local machine.  Once finished, create a file called 

`.env` 

inside root project folder.  This file will not be checked in for security purposes and referenced in the .gitignore file so you don't have to worry about checking in this file.  

Add the following line:

`CLEARDB_DATABASE_URL=mysql://root@localhost:3306/bamazon?reconnect=true`

Save the file.

Be sure to have mysql server up and running.  On Mac its `mysql.server start`.  If you plan on doing development, its advisable to run Mysql as a service and keep it on all the time.  Otherwise, you have to start up this service everytime you need to test.

With your favorite Mysql IDE, create a schema called `bamazon` 

Install of the dependencies for this project.

`npm install`

# Test

This project is a set of unit tests.  To run them, simply type in the following command:

`npm test`

Thats it!  That concludes the project.  Use this project as an example ORM for other projects.  Any question please feel free to ask!

