import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {FormControl , FormGroup , Validators} from '@angular/forms'
=======
import {FormControl , FormGroup , Validators} from '@angular/forms';
// import { userInfo } from 'os';
import {UserLogin} from './login.model';
import {loginService} from './login.service'
import {Router} from '@angular/router';

>>>>>>> a27b93b (update)
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  logInForm:FormGroup;

  constructor() {
=======
  // userList:UserLogin[]=[];
  // UserLoginObj: UserLogin = new UserLogin();

  logInForm:FormGroup;

  constructor(public loginService:loginService , public router:Router ) {
>>>>>>> a27b93b (update)

  }


  ngOnInit(): void {
<<<<<<< HEAD
=======

    // init
    // this.UserLoginObj = new UserLogin();
>>>>>>> a27b93b (update)
    this.logInForm = new FormGroup({
      'email' : new FormControl(null , [Validators.email , Validators.required]  ),
      'password' : new FormControl(null ,[ Validators.required , Validators.pattern(/[a-z0-9]/)])
    })
   }
  
  

<<<<<<< HEAD


=======
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
>>>>>>> a27b93b (update)
}
