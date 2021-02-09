import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
import {loginService}  from  '../login/login.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss']
})
export class TrackorderComponent implements OnInit {
  logInForm:FormGroup;
  constructor(public loginService:loginService , public router:Router ) { }

  ngOnInit(): void {

    // track Order Form validation
    this.logInForm= new FormGroup({
      'email' : new FormControl(null , [Validators.email , Validators.required]  ),
      'password' : new FormControl(null ,[ Validators.required , Validators.pattern(/[a-z0-9]/)])
    })
   }


   createNewUser(logInForm){
    this.loginService.PostUser(logInForm.value).subscribe( res =>{
     this.router.navigate(['/home'])

    })


 }

//  routeToSignup(){
//    this.router.navigate(['/signup'])
//  }

  }


