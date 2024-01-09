### Author : Léna BELIAZI

### Keycloak configuration and Guard setup
This project guides you through the setup and configuration of a keycloak instance and how to link it with an Angular application.
You will be able to see how to login/logout but also get the user details and the token generated after login.

### Versions
To launch this project, you need Angular CLI v17.0.7 and Node.js v20.10.0 (or just 18 and above).

### Pre requisites
[Node.js](https://nodejs.org/en/)<br/>
[Angular CLI](https://angular.io/cli)<br/>
```bash 
npm install -g @angular/cli@17.0.7 
```
[Docker](https://www.docker.com/products/docker-desktop)<br/>

### Build and run te application
```bash
npm install
ng build
// the keycloak instance will start and import all the required data (located in src/keycloak/realm-export.json)
docker-compose up -d
// to run
// you can also use npm run start
ng serve --open
```

### How to use
If you want to handle the users (create or update password), you can go on this URL: http://localhost:8080/ and click on "Administration console".
You can then use username "admin", and password "admin".
You will then have access to all the Realms.
Click on the "SpringBootKeycloak" realm and go to users, you will see all of the users associated.
If the user called "user1" does not exist, you may need to create this user (see : https://www.keycloak.org/docs/latest/server_admin/#assembly-managing-users_server_administration_guide)
Go to this URL: http://localhost:4200/
You will be redirected to the keycloak login page.
You can login with user : "user1" and password: "password" (if the user already existed, otherwise use the username and password you have configured).
You can then interact with the buttons to see how the application reacts.
