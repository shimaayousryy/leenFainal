import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm:FormGroup;

  constructor() {

  }


  ngOnInit(): void {
    this.logInForm = new FormGroup({
      'email' : new FormControl(null , [Validators.email , Validators.required]  ),
      'password' : new FormControl(null ,[ Validators.required , Validators.pattern(/[a-z0-9]/)])
    })
   }
  
  



}
