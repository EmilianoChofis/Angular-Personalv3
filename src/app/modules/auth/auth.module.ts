import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './pages/signin/signin.component';
import {FormsModule} from "@angular/forms";
import {materialModules} from "../../types/material-modules";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ],
  exports:[
    SigninComponent
  ]
})
export class AuthModule { }
