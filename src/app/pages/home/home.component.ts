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

   // page number to loading more
    pageNumber:number;

    url="http://leennew.souq-athar.com/leen/public/";

    disableLoadMore:boolean = false;
    disableLoadLess:boolean=true;

  constructor(private _router: Router ,
    private homeproductServices: HomeproductService) {

  }


  // this._router.navigate(['cart'])


  ngOnInit(): void {
  //  localStorage.removeItem('page')
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
        localStorage.setItem('page' ,Object.values(res)[0] ) ;

        // if( Object.values(res)[0]  == 1) {
        //   this.disableLoadLess = false;
        // }

        // console.log(( localStorage.getItem('page')))

        localStorage.setItem('totalpage' ,Object.values(res)[4] ) ;

        if(localStorage.getItem('totalpage') != localStorage.getItem('page')) {
          this.disableLoadMore = true;
        }

        if(  localStorage.getItem('page') == '1' ) {
          this.disableLoadLess = false;
          console.log(( localStorage.getItem('page')))
        }
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


  // button load more product with IPaginator
  loadMore(){
    if((Number(localStorage.getItem('totalpage')) - Number(localStorage.getItem('page')) ) == 1) {
      this.disableLoadMore = false;
    }

 
    this.pageNumber =1+Number( localStorage.getItem('page'))
    localStorage.setItem('page' ,String(this.pageNumber) )

    if(localStorage.getItem('page') != '1') {
      this.disableLoadLess = true;
    }

    this.homeproductServices.getAllWithLoadMore(String(this.pageNumber)).subscribe(
      res=>{
        this.productList = res.data.map( (item) => {
          item.image_path = this.url+item.image_path+item.item_image;
          return item;
        });      }
    )
  }


  loadLess(){
    if( Number(localStorage.getItem('page'))  == 1) {
      this.disableLoadLess = false;
    } else {
      this.disableLoadLess = true;
    }

    this.pageNumber =Number( localStorage.getItem('page'))-1;
    localStorage.setItem('page' ,String(this.pageNumber) )

    if(localStorage.getItem('page') != '1') {
      this.disableLoadLess = true;
      this.disableLoadMore = true;
    } else if (localStorage.getItem('page') == '1') {
      this.disableLoadLess = false;

    }

    this.homeproductServices.getAllWithLoadMore(String(this.pageNumber)).subscribe(
      res=>{
        this.productList = res.data.map( (item) => {
          item.image_path = this.url+item.image_path+item.item_image;
          return item;
        });      }
    )
  }

}
