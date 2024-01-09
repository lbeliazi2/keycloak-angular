# keycloak-angular
This project guides you through the setup and configuration of a keycloak instance and how to link it with an Angular application.
You will be able to see how to login/logout but also get the user details and the token generated after login.

# versions
To launch this project, you need Angular CLI v17.0.8 (see how to upgrade https://www.techiediaries.com/upgrade-angular-to-v17/) and Node.js v20.10.0 (https://nodejs.org/en).
For the keycloak instance, you will also need Java 11+.

# Pre requisites
Once you have downloaded all the necessary tools, you will need to create a JAVA_HOME variable and add it in your PATH variable.
You will also need to launch the keycloak instance, that you can find in the associated files (follow the associated README).

# How to build
You will first need to download all of the necessary dependencies with: npm install (or npm i).
If you have issues you can use this --legacy-peer-deps to fix the issues you have.

# How to run
Once the dependencies are downloaded, you can run: npm run start, which should launch the application.

# How to use
Go to this URL: http://localhost:4200/
You will be redirected to the keycloak login page.
If you want to handle the users (create or update password), you can go on this URL: http://localhost:8080/ and click on "Administration console".
You can then use username "admin", and password "admin".
You will then have access to all the Realms.
Click on 

