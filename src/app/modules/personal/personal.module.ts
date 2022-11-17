import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';
import {MatTableModule} from "@angular/material/table";
import {materialModules} from "../../types/material-modules";



@NgModule({
  declarations: [
    MainPersonalComponent
  ],
    imports: [
        CommonModule,
        MatTableModule,
      ...materialModules
    ]
})
export class PersonalModule { }
