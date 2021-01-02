import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'; 




@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.scss']
})
export class CompanyinfoComponent implements OnInit {

  
  
  constructor(private _router: Router ) { }

  submit(){
    this._router.navigate(['home']);
    localStorage.setItem('permission' , 'done')
    
  }

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




  



  }



}
