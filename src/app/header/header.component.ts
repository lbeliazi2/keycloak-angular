import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth/service/auth.service";
import {KeycloakUser} from "../auth/model/keycloakUser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private user: KeycloakUser = new KeycloakUser();
  private token: string | undefined;
  private isLoggedIn: boolean = false;
  constructor(private route: ActivatedRoute,
              private router: Router, protected authService: AuthService) { }

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
    console.log(this.user);
    console.log(this.token);
  }

}
