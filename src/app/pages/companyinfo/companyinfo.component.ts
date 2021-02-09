import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {COMPANYINFO} from './companyinfo.model'
import Swal from 'sweetalert2';
import {CompanyService} from './company.service'
import {Cities} from '../signup/city.model'
import {signUpService} from '../signup/signup.service'
import { IDTYPE } from './idtype.model';



interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


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
  // idtype array
  idTypeName :string
  // idType:any;

  types:IDTYPE[]=[];
  typesobj:IDTYPE =new IDTYPE();

  fileName:string;

  companyInfotForm: FormGroup;

  constructor(private _router: Router , private CompanyService:CompanyService , private signUpService:signUpService ,     private renderer2: Renderer2,
    ) { }



  ngOnInit(): void {
    // create object from array
    this.informatioObj = new COMPANYINFO();
    this.cityObj = new Cities();

    this.typesobj = new IDTYPE();

// call function to display data
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
      this._router.navigate(['/Contract'])

    })
  }
   // get city to display
  getCiteis(){
    this.signUpService.getCities().subscribe(res => {
      this.cityList = res;


    })
  }
  // get city to send to api
fillCity(city:Cities){
  this.informatioObj.issuing_city_id = city.id;
  this.cityName = city.en_city_name;
}

// get id type
getIdType(){
  this.CompanyService.getIdType().subscribe(res =>{
    this.types = res.data;

  })
}

fillIdType(type:IDTYPE){
    this.informatioObj.id_type =String( type);
  this.idTypeName = String( type);
}

 // upload img
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

// onFileChangedOne(event: HTMLInputEvent, prop: string) {
//   const file = event.target.files[0];
//   let el = event.target.parentNode as HTMLElement;
//   this.renderer2.removeClass(el, 'services-image')
//   let reader = new FileReader();
//   reader.readAsDataURL(file)
//   reader.onload = () => {
//     this.informatioObj = reader.result as string;
//     this.informatioObj.certification1 = this.applicationObj.certification1.split(',')[1];

//     this.renderer2.setStyle(el,
//       'background-image', `url(${reader.result ? reader.result : this.applicationObj.certification1})`)
//     this.renderer2.setStyle(el, 'background-size', 'cover')
//     this.renderer2.setStyle(el, 'background-position', 'center')

//   }
// }

// changebackground(el: ElementRef, prop: string, isclear?: boolean, clsProp?: string) {
//   if (isclear) {
//     if (prop == 'UserImageURL') {
//       this.renderer2.setStyle(el, 'background-image', `url('../../../assets/img/upload.png')`)
//       this.applicationObj[clsProp] = "Deleted"
//       return
//     }
//   }
//   if (this.applicationObj[prop] === null) return
//   this.renderer2.setStyle(el.nativeElement,
//     'background-image', `url('${this.applicationObj.certification1}')`);
//   this.renderer2.setStyle(el.nativeElement, 'background-size', 'cover')
//   this.renderer2.setStyle(el.nativeElement, 'background-position', 'center')
//   this.renderer2.setStyle(el.nativeElement, 'border', '3px solid black')
//   this.renderer2.removeClass(el.nativeElement, 'services-image')
// }

savePdf(event: HTMLInputEvent) {
  const file = event.target.files[0];
  this.fileName =file.name;
  this.informatioObj.attachment_1= this.fileName
  // this.informatioObj.attachment_1= '.'+file.name.split('.')[1]


}

}


