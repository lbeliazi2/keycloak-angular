import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/service/auth.service";
import {KeycloakUser} from "../auth/model/keycloakUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  protected user: KeycloakUser = new KeycloakUser();
  protected token: string | undefined;
  userDetailsVisible = false;
  tokenVisible = false;
  private isLoggedIn: boolean = false;

  constructor(protected authService: AuthService,
              protected router: Router) {
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

  navigateToOtherPage() {
    this.router.navigate(['other']);
  }
}
