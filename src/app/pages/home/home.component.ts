import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { category } from './category.model';
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

    // url to display image
    url="http://leennew.souq-athar.com/leen/public/";


    // condition to display button if data not equal all data of product
    disableLoadMore:boolean = false;

    // main array of category
     category:category[]=[];

     // main object
     categoryObj:category= new category();



  constructor(private _router: Router ,
    private homeproductServices: HomeproductService) {

  }


  // this._router.navigate(['cart'])


  ngOnInit(): void {

    // init main object of  category
    this.categoryObj = new category();

    // main method category get All
     this.getAllCategory();

   localStorage.removeItem('page')
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
        localStorage.setItem('totalpage' ,Object.values(res)[4] )
        if(localStorage.getItem('totalpage') != localStorage.getItem('page')) {
          this.disableLoadMore = true;
        }
        this.productList = res.data.map( (item) => {
          item.image_path = this.url+item.image_path+item.item_image;
          return item;
        });
      }
    )
  }
  inject(arg0: string[]) {
    throw new Error('Method not implemented.');
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
    this.homeproductServices.getAllWithLoadMore(String(this.pageNumber)).subscribe(
      res=>{
        this.productList = res.data.map( (item) => {
          item.image_path = this.url+item.image_path+item.item_image;
          return item;
        });      }
    )
  }


  /////////////////////// category /////////////////////////

  getAllCategory(){
    this.homeproductServices.getAllCategory().subscribe(
      res=>{
        this.category = res;
      }
    )
  }

  //// fill id to get data from category
  fill(prop: category) {
  this.categoryObj.id = prop.id;
    // get all product
    this.homeproductServices.getById(this.categoryObj.id).subscribe(
      res=>{
        console.log(res)
        this.productList = res.data.map( (item) => {
          item.image_path = this.url+item.image_path+item.item_image;
          return item;
        });
      }
    )

  }
}
