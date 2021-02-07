import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {COMPANYINFO} from './companyinfo.model'
import Swal from 'sweetalert2'; 
import {CompanyService} from './company.service'
import {Cities} from '../signup/city.model'
import {signUpService} from '../signup/signup.service'
import { IDTYPE } from './idtype.model';


@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.scss']
})
export class CompanyinfoComponent implements OnInit {

  // companyinfo array
  information: COMPANYINFO[] = [];
  informatioObj: COMPANYINFO = new COMPANYINFO();

  // city array
  cityList : Cities[] = [];
  cityObj : Cities = new Cities();
  cityName: string;
  idTypeName :string
  idType:any;

  companyInfotForm: FormGroup;
  constructor(private _router: Router , private CompanyService:CompanyService , private signUpService:signUpService) { }

  uploadFile(){
    
    (async () => {
   
      const { value: file } = await Swal.fire({
        title: 'Select image',
        input: 'file',
        inputAttributes: {
          'accept': 'image/*',
          'aria-label': 'Upload your profile picture'
        }
      })
      
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          Swal.fire({
            title: 'Your uploaded picture',
            
            imageAlt: 'The uploaded picture'
          })
        }
        reader.readAsDataURL(file)
      }
      
      })()
   
   
  }



  ngOnInit(): void {
    this.informatioObj = new COMPANYINFO();
    this.cityObj = new Cities();


    this.getCiteis();
    this.getIdType();

    // form validation
    this.companyInfotForm = new FormGroup({
      'national_id' : new FormControl(null, [ Validators.pattern(/[0-9]/), Validators.required]),
      'Commercial_Reg' : new FormControl(null, [ Validators.pattern(/[0-9]/), Validators.required]),
      'Address': new FormControl(null, [Validators.required])
    })
  }

  createCompanyInfo(){
    this.CompanyService.companyInfo(this.informatioObj).subscribe(res =>{

    })
  }
  getCiteis(){
    this.signUpService.getCities().subscribe(res => {
      this.cityList = res;
      

    })
  }
  // get city to send to api
fillCity(city:Cities){
  this.informatioObj.id = city.id;
  this.cityName = city.en_city_name;
}

getIdType(){
  this.CompanyService.getIdType().subscribe(res =>{
    this.idType = res.data

  })
}

fillIdType(type:any){
  // this.informatioObj.id = city.id;
  this.idTypeName = type
}
}


