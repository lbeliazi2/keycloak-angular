import {KeycloakAuthGuard, KeycloakService} from "keycloak-angular";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class AppAuthGuardService extends KeycloakAuthGuard {
  constructor(protected route: Router,
              private keycloakService: KeycloakService,
              protected authService: AuthService) {
    super(route, keycloakService);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    return new Promise(async (resolve, eject) => {
      if (!this.authenticated) {
        await this.authService.login();
        return;
      }
      console.log('role restriction given at app-routing.module for this route', route.data["roles"]);
      console.log('User roles coming after login from keycloak:', this.roles);
      const requiredRoles = route.data["roles"];
      let granted: boolean = false;
      if (!requiredRoles || requiredRoles.length == 0) {
        granted = true;
      } else {
        for (const requiredRole of requiredRoles) {
          if (this.roles.indexOf(requiredRole) > -1) {
            granted = true;
            break;
          }
        }
      }
      if (granted === false) {
        await this.router.navigate(['/']);
      }
      resolve(granted);
    });
  }
}

