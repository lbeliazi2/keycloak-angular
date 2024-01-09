import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {Header} from "primeng/api";
import {HomeComponent} from "./home/home.component";
import {AppAuthGuardService} from "./auth/service/app-auth-guard.service";
import {OtherPageComponent} from "./other-page/other-page.component";

const routes: Routes = [
  {
    path: 'board',
    component: HomeComponent,
    canActivate: [AppAuthGuardService],
  },
  {
    path: 'other',
    component: OtherPageComponent,
    canActivate: [AppAuthGuardService],
    data: {roles: ['user']},
  },
  {
    path: '',
    redirectTo: '/board',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
