### Author : Léna BELIAZI

### Keycloak configuration and Guard setup
This project guides you through the setup and configuration of a keycloak instance and how to link it with an Angular application.
You will be able to see how to login/logout but also get the user details and the token generated after login.

### Versions
To launch this project, you need Angular CLI v17.0.8 and Node.js v20.10.0.

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
docker-compose up -d
// to run
ng serve --open
```

### How to use
If you want to handle the users (create or update password), you can go on this URL: http://localhost:8080/ and click on "Administration console".
You can then use username "admin", and password "admin".
You will then have access to all the Realms.
Click on the "SpringBootKeycloak" realm and go to users, you will see all of the users associated.
Go to this URL: http://localhost:4200/
You will be redirected to the keycloak login page.
You can login with user : "user1" and password: "password".
You can then interact with the buttons to see how the application reacts.
