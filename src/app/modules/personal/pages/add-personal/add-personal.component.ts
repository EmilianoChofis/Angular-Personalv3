import { Component, OnInit } from '@angular/core';
import {Personal} from "../../types/personal";
import {PersonalService} from "../../service/personal.service";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html'
})
export class AddPersonalComponent implements OnInit {
  person:Personal={
    id: 0,
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    sueldo: 0,
    puesto: {},
  }

  positions: any[]=[];

  constructor(public modal: DialogRef<AddPersonalComponent>,
    private personalService: PersonalService) {

  }

  ngOnInit(): void {
    this.getPositions();
  }

  getPositions(){
    this.personalService.findAllPosition().subscribe((response)=>{
      this.personalService.isLoading=false;
      this.positions= response
    })
  }

  savePerson(){
    console.log(this.person);
  }

}
