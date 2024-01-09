export const environment = {
  production: true,
  envName: 'local',
  keycloak: {
    issuer: 'http://localhost:8080/',
    realm: 'SpringBootKeycloak',
    clientId: 'login-app',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid profile email'

  }
};
