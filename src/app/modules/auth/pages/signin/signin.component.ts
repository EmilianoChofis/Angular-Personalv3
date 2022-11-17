import { Component} from '@angular/core';
import {UserLogin} from "../../types/user";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent{

  user:UserLogin = {
    email:'',
    password:''
  }
  logoPath:string="../../../../assets/img/God_of_War_Logo.png";
  get isLoading(){
    return this.authService.isLoading;
  }

  constructor(private authService: AuthService, private router:Router) {
    if (!!localStorage.getItem("token")){
      this.router.navigateByUrl('/');
    }
  }

  signin(){
    this.authService.login(this.user);

  }
}
