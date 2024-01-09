import {Component, OnInit} from '@angular/core';
import {KeycloakProfile} from "keycloak-js";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'keycloak-angular';
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.keycloakService.isLoggedIn().then((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    if(this.isLoggedIn){
      this.keycloakService.loadUserProfile().then((userProfile: KeycloakProfile) => {
        this.userProfile = userProfile;
        console.log(userProfile)
        console.log(this.keycloakService.getToken())
      }).catch(() => {  console.log("error")});
    }
  }


}
