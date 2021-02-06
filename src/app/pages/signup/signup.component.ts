import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'

import { Users } from './signup.model';
import {signUpService} from './signup.service'
import { Router } from '@angular/router';
import { Cities } from './city.model';
import swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  // Users signUp array
  user:Users[]=[];  
  userObj : Users = new Users();

  // citeis array
  cityList : Cities[] = [];
  cityObj : Cities = new Cities();
  
  cityName: string;

  signUpForm:FormGroup;
  constructor( public signUpService:signUpService , public _Router:Router ) { }

 
ngOnInit(): void {

  // init
  this.userObj = new Users();
  this.cityObj = new Cities();

  this.getCiteis();

  //register form validation
  this.signUpForm = new FormGroup({
    'first_name' : new FormControl(null , [Validators.maxLength(10) , Validators.required]  ),
    'last_name' : new FormControl(null , [Validators.maxLength(10) , Validators.required]  ),
    'phone' : new FormControl(null , [Validators.maxLength(9),Validators.minLength(9) , Validators.required,Validators.pattern(/[0-9]/)] ) ,
    'email' : new FormControl(null , [Validators.email , Validators.required]  ),
    'password' : new FormControl(null ,[ Validators.required , Validators.pattern(/[a-z0-9]/)]),

  })

 }


// add user registeration to api
createAllUser(){
  this.signUpService.signUpForm(this.userObj).subscribe(res =>{
    if(res.message == "sucessful"){
      swal.fire({
        icon: 'success',
        text : 'your registration is success now',
  
        showCancelButton: true,
        confirmButtonText: `logIn`,
  
      }).then((result) => {
  
        if (result.isConfirmed) {
          this._Router.navigate(['/confirmphone'])
        } else if (result.isDenied) {
          swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
   
  })
}

// display cities 
getCiteis(){
  this.signUpService.getCities().subscribe(res => {
    this.cityList = res;

  })
}

// get city to send to api
fill(city:Cities){
  this.userObj.id = city.id;
  this.cityName = city.en_city_name;
}

}
