import { Component, OnInit } from '@angular/core';

import {FormControl , FormGroup , Validators} from '@angular/forms';
// import { userInfo } from 'os';
import {UserLogin} from './login.model';
import {loginService} from './login.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm:FormGroup;


  constructor(public loginService:loginService , public router:Router ) {

  }

  ngOnInit(): void {

    // init
    // this.UserLoginObj = new UserLogin();

    this.logInForm = new FormGroup({
      'email' : new FormControl(null , [Validators.email , Validators.required]  ),
      'password' : new FormControl(null ,[ Validators.required , Validators.pattern(/[a-z0-9]/)])
    })
   }
  
  


   createNewUser(logInForm){
     console.log(logInForm.value)
     if(logInForm.valid == true){
     this.loginService.PostUser(logInForm.value).subscribe( res =>{
      //  console.log(res)
      //  if(res ){
      //   this.router.navigate(['/confirmphone'])
      // }else{
      // }
     })
   }

  }

}
