import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Personal} from "../types/personal";
import {APP_URL} from "../../../services/base-url.app";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private loading: boolean = false
  private people: Personal[] = []

  get Personal(){
    return [...this.people]
  }

  set setPersonal(person: Personal){
    this.people.push(person)
  }

  get isLoading(){
    return this.loading
  }

  findAll(){
    this.loading = true
    return this.http.get<any>(`${APP_URL}api/personal/`)
      .pipe(catchError
        (err => {
          this.loading = false
          return err
          }
        )
      ).subscribe((response: Personal[]) => {
        this.people=response
        this.loading = false
      }
    )
  }
  findAllPosition(){
    this.loading = true
    return this.http.get<any>(`${APP_URL}api/position/`)
  }

  constructor(private http: HttpClient) { }
}
