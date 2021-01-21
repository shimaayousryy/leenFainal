import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { HomeproductService } from './homeproduct.service';
import { Products } from './product.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // default value
  flag: boolean = false;
  name:String ="shimaa";


  // homeporoductList Array
   productList:Products[]=[];


    url="http://leennew.souq-athar.com/leen/public/"

  constructor(private _router: Router ,
    private homeproductServices: HomeproductService) {

  }


  // this._router.navigate(['cart'])


  ngOnInit(): void {



    let perm = localStorage.getItem('permission');
    if (perm != null) {
      this.flag = true;
      localStorage.clear();


    } else {
      this.flag = false;
    }

    // get all product
    this.homeproductServices.getAll().subscribe(
      res=>{
        this.productList = res.data.map( (item) => {
          item.image_path = this.url+item.image_path+item.item_image;
          return item;
        });
      }
    )
  }




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


}
