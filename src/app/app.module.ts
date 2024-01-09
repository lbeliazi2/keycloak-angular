import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {initializeKeycloak} from "./utils/keycloak-initiliazer";
import {HomeComponent} from './home/home.component';
import {OtherPageComponent} from "./other-page/other-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}


