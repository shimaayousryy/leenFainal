import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // default value
  flag: boolean = false;
  name:String ="shimaa";
  constructor(private _router: Router) {

  }


  // this._router.navigate(['cart'])


  addToCart() {

    swal.fire({
      icon: 'success',

      showCancelButton: true,
      confirmButtonText: `go to cart`,

    }).then((result) => {

      if (result.isConfirmed) {
        this._router.navigate(['cart'])
      } else if (result.isDenied) {
        swal.fire('Changes are not saved', '', 'info')
      }
    })
  }


  getTerms() {
    this._router.navigate(['terms'])

  }
  ngOnInit(): void {



    let perm = localStorage.getItem('permission');
    console.log(perm)
    if (perm != null) {
      this.flag = true;
      localStorage.clear();


    } else {
      this.flag = false;
    }

  }


}
