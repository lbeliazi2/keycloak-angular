import {KeycloakService} from "keycloak-angular";
import {Injectable} from "@angular/core";
import {KeycloakUser} from "../model/keycloakUser";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private keycloakService: KeycloakService) {
  }

  login() {
    this.keycloakService.login();
  }

  isLoggedIn(): Promise<boolean> {
    return this.keycloakService.isLoggedIn();
  }

  getToken(): string | undefined {
    return this.keycloakService.getKeycloakInstance().token;
  }

  logOut(): Promise<void> {
    return this.keycloakService.logout();
  }

  loadProfile(): Promise<KeycloakUser> {
    return this.keycloakService.loadUserProfile();
  }

}
