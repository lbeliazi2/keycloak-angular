import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/service/auth.service";
import {KeycloakUser} from "../auth/model/keycloakUser";
import {Router} from "@angular/router";
import {AppAuthGuardService} from "../auth/service/app-auth-guard.service";

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.css']
})
export class OtherPageComponent implements OnInit {

  protected user: KeycloakUser = new KeycloakUser();
  protected token: string | undefined;
  userDetailsVisible = false;
  tokenVisible = false;
  private isLoggedIn: boolean = false;

  constructor(protected authService: AuthService,
              protected router: Router,
              protected authGardService: AppAuthGuardService) {
  }

  public async ngOnInit(): Promise<void> {
    this.isLoggedIn = await this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = await this.authService.loadProfile();
      this.token = await this.authService.getToken();
    }
  }

  logout() {
    this.authService.logOut();
  }

  showUserDetails() {
    this.userDetailsVisible = true;
    this.tokenVisible = false;
  }

  showToken() {
    this.tokenVisible = true;
    this.userDetailsVisible = false;
  }

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
