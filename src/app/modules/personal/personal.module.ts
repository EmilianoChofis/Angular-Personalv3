import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';
import {MatTableModule} from "@angular/material/table";
import {materialModules} from "../../types/material-modules";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AddPersonalComponent } from './pages/add-personal/add-personal.component';



@NgModule({
  declarations: [
    MainPersonalComponent,
    AddPersonalComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ...materialModules,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class PersonalModule { }
