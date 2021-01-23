import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup;
  constructor() { }

 
ngOnInit(): void {
  this.signUpForm = new FormGroup({
    'first_name' : new FormControl(null , [Validators.maxLength(10) , Validators.required]  ),
    'last_name' : new FormControl(null , [Validators.maxLength(10) , Validators.required]  ),
  
    'email' : new FormControl(null , [Validators.email , Validators.required]  ),
    'password' : new FormControl(null ,[ Validators.required , Validators.pattern(/[a-z0-9]/)])
  })
 }








}
