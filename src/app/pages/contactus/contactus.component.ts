import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  cotactUsForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.cotactUsForm = new FormGroup({
      'name' : new FormControl(null , [Validators.maxLength(30) , Validators.required]  ),
      'phone' : new FormControl(null , [Validators.minLength(10) , Validators.required] ) ,
      'email' : new FormControl(null , [Validators.email , Validators.required]  ),
    
      })
   }

}
