import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
import { from } from 'rxjs';
import { ContactUs } from './contactus.model';
import {ContactusService} from './contactus.service'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {


 
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

}
