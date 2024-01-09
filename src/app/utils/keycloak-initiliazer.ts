import {KeycloakOptions, KeycloakService} from "keycloak-angular";
import {KeycloakConfig, KeycloakInitOptions} from "keycloak-js";
import {environment} from "../environments/environment";

export function initializeKeycloak(keycloakService: KeycloakService) {

  const initOptions: KeycloakInitOptions = {
    onLoad: 'login-required',
    checkLoginIframe: false,
    redirectUri: environment.keycloak.redirectUri,
    refreshToken: "1800",
    scope: environment.keycloak.scope,
  };

  const config: KeycloakConfig = {
    url: environment.keycloak.issuer,
    realm: environment.keycloak.realm,
    clientId: environment.keycloak.clientId
  };

  const keycloakOptions: KeycloakOptions = {
    config: config,
    initOptions: initOptions,
    loadUserProfileAtStartUp: true,
  }


  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloakService.init(
          keycloakOptions);
        console.log('Keycloak initialized correctly');
        resolve(resolve);
      } catch (error) {
        console.log('Error initializing keycloak' + error);
        reject(error);
      }
    });
  };
}
