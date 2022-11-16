import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {materialModules} from "./types/material-modules";
import {AppRouterModule} from "./shared/routers/app-router.module";
import {AuthModule} from "./modules/auth/auth.module";
import {PersonalModule} from "./modules/personal/personal.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AuthModule,
    PersonalModule,

    ...materialModules,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    //así importamos todo en una sola linea
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
