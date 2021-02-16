import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {PhoneService} from './phone.service'
import {PhoneCode} from './phone.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-confirmphone',
  templateUrl: './confirmphone.component.html',
  styleUrls: ['./confirmphone.component.scss']
})
export class ConfirmphoneComponent implements OnInit {

  // intial phoneCode  array
code:PhoneCode[]=[];
codeObj:PhoneCode = new PhoneCode();

confirmCodeForm:FormGroup;
  constructor(private _router: Router , private PhoneService:PhoneService) { }

  ngOnInit(): void {
    this.codeObj = new PhoneCode();
    // confirm Code Form validation
    this.confirmCodeForm = new FormGroup({
      'code' : new FormControl(null , [Validators.minLength(6) , Validators.required]  ),
    })
  }

  //send code confirmation
  confirmCode(){
    this.PhoneService.confirmPhone(this.codeObj).subscribe(res =>{
      this._router.navigate(['/confirminfo'])

    })
  }
}
