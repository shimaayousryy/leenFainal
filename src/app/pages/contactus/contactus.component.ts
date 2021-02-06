import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {FormControl , FormGroup , Validators} from '@angular/forms'
=======
import {FormControl , FormGroup , Validators} from '@angular/forms';

import {ContactUs} from './contactus.model' ;
import {ContactusService} from './contactus.service'
>>>>>>> a27b93b (update)
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

<<<<<<< HEAD
  cotactUsForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.cotactUsForm = new FormGroup({
      'name' : new FormControl(null , [Validators.maxLength(30) , Validators.required]  ),
      'phone' : new FormControl(null , [Validators.minLength(10) , Validators.required] ) ,
      'email' : new FormControl(null , [Validators.email , Validators.required]  ),
    
      })
   }

=======
 
   // ContactUs array
   contactUs:ContactUs[]=[];  
  //  create object 
   contactUsObj : ContactUs = new ContactUs();
 
  //  declare form 
  cotactUsForm:FormGroup;
  constructor(public ContactusService:ContactusService) { }

  ngOnInit(): void {  
      // init
      this.contactUsObj = new ContactUs();
      // form validation
    this.cotactUsForm = new FormGroup({
      'title' : new FormControl(null , [ Validators.required]  ),
      'details' : new FormControl(null , [ Validators.required] ) ,
      })
   }

  //  contacts form to send data to api
   createContactUsForm(){
     this.ContactusService.contactUsForm(this.contactUsObj).subscribe( res =>{
     })
   }



  
>>>>>>> a27b93b (update)
}
