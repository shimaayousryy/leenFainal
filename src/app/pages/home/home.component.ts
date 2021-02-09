import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { category } from './category.model';
import { HomeproductService } from './homeproduct.service';
import { Pagination } from './pagination.model';
import { Products } from './product.model';
// import {ProductsByPrice} from './price.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  // default value
  flag: boolean = false;

  term:string;
  // homeporoductList Array
  productList: Products[] = [];
  productObj:Products = new Products();

  // main array of category
  category: category[] = [];
  categoryObj: category = new category();

  // page number to loading more
  pageNumber: number;
  pageNumArr:Pagination[]=[];
  page:number =1;

  // url to display image
  url = "http://leennew.souq-athar.com/leen/public/";

  // condition to display button if data not equal all data of product
  disableLoadMore: boolean = false;
  disableLoadLess: boolean = false;
  // condition to display button if data not equal all data of product
  disableLoadMoreProductBycategoryId: boolean = false;
  disableLoadLessProductBycategoryId: boolean = false;

  constructor(private _router: Router, private homeproductServices: HomeproductService) {
  }

  ngOnInit(): void {

   this.productObj =new Products();
    // init main object of  category
    this.categoryObj = new category();

    // this.productByPriceObj = new ProductsByPrice();
    // main method category get All
    this.getAllCategory();
    // this.getProductByPrice();

    localStorage.removeItem('page');

    let perm = localStorage.getItem('permission');
    if (perm != null) {
      this.flag = true;
      localStorage.clear();
    } else {
      this.flag = false;
    }

    // set all product + storing pages using localStorage and display products by pagination
    // display products
    this.homeproductServices.getAll().subscribe(
      res => {
        localStorage.setItem('page', Object.values(res)[0]);
        localStorage.setItem('totalpage', Object.values(res)[4]);

       localStorage.setItem('totalpage', Object.values(res)[4]);

      let a = Number(localStorage.getItem('totalpage'));

        if (localStorage.getItem('totalpage') != localStorage.getItem('page')) {
          this.disableLoadMore = true;
        }

        if (localStorage.getItem('page') == '1') {
          this.disableLoadLess = false;
        }



        this.productList = res.data.map((item) => {

          item.image_path = this.url + item.image_path + item.item_image;
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


    // button load more product with IPaginator
    //check if number of storage pages less than number of total number to show next products from pagination.
  loadMore() {
    this.disableLoadMoreProductBycategoryId = false;
    this.disableLoadLessProductBycategoryId = false;
    if ((Number(localStorage.getItem('totalpage')) - Number(localStorage.getItem('page'))) == 1) {
      this.disableLoadMore = false;
    }

    this.pageNumber = Number(localStorage.getItem('page')) + 1
    localStorage.setItem('page', String(this.pageNumber))



    if (localStorage.getItem('page') != '1') {
      this.disableLoadLess = true;
      //pagination
      this.page = Number(localStorage.getItem('page'));
    }

    this.homeproductServices.getAllWithLoadMore(String(this.pageNumber)).subscribe(
      res => {
        this.productList = res.data.map((item) => {
          item.image_path = this.url + item.image_path + item.item_image;
          return item;
        });
      }
    )
  }

    // button load more product with IPaginator
    //check if number of storing pages more than number of total number to show previous products from pagination.
  loadLess() {
    this.disableLoadMoreProductBycategoryId = false;
    this.disableLoadLessProductBycategoryId = false;

    if (Number(localStorage.getItem('page')) == 1) {
      this.disableLoadLess = false;
    } else {
      this.disableLoadLess = true;

    }

    this.pageNumber = Number(localStorage.getItem('page')) - 1;
    localStorage.setItem('page', String(this.pageNumber))

    if (localStorage.getItem('page') != '1') {
      this.disableLoadLess = true;
      this.disableLoadMore = true;
      this.page = Number(localStorage.getItem('page'));
    } else if (localStorage.getItem('page') == '1') {
      this.disableLoadLess = false;
      this.page =1

    }

    this.homeproductServices.getAllWithLoadMore(String(this.pageNumber)).subscribe(
      res => {
        this.productList = res.data.map((item) => {
          item.image_path = this.url + item.image_path + item.item_image;
          return item;
        });
      }
    )
  }


  /*****************get category*********************/
  getAllCategory() {
    this.homeproductServices.getAllCategory().subscribe(
      res => {
        this.category = res.map((item) => {
          item.image_path = this.url + item.image_path + item.category_image;
          return item;
        });

      }
    )
  }



  //// fill id to get data from category
  fill(prop: category) {
    localStorage.removeItem('page');
    localStorage.removeItem('totalpage  ')

    // diasble button of all product to able button of product by category id
    this.disableLoadMore = false;
    this.disableLoadLess = false;
    this.categoryObj.id = prop.id;
    localStorage.setItem('categoryObjId', String(this.categoryObj.id));

    // get all product by id
    this.homeproductServices.getById(this.categoryObj.id).subscribe(
      res => {
        localStorage.setItem('page', Object.values(res)[0]);
        localStorage.setItem('totalpage', Object.values(res)[4]);
        if (localStorage.getItem('totalpage') != localStorage.getItem('page')) {
          this.disableLoadMoreProductBycategoryId = true;
        }

        if (localStorage.getItem('page') == '1') {
          this.disableLoadLessProductBycategoryId = false;
        }
        this.productList = res.data.map((item) => {
          item.image_path = this.url + item.image_path + item.item_image;
          return item;
        });
      }
    )

  }

  FillSingleProduct(item: Products){
    this.productObj.image_path = item.image_path;
    this.productObj.en_item_name = item.en_item_name;
    this.productObj.en_description = item.en_description;
    this.productObj.price = item.price;

  }

  // button load more products by id with IPaginator
    //check if number of storing pages less than number of total number to show previous products by id from pagination.
  loadLessProductBycategoryId() {

    // diasble button of all product to able button of product by category id
    this.disableLoadMore = false;
    this.disableLoadLess = false;

    this.categoryObj.id = Number(localStorage.getItem('categoryObjId'));
    if (Number(localStorage.getItem('page')) == 1) {
      this.disableLoadLessProductBycategoryId = false;
    } else {
      this.disableLoadLessProductBycategoryId = true;
    }

    this.pageNumber = Number(localStorage.getItem('page')) - 1;
    localStorage.setItem('page', String(this.pageNumber))

    if (localStorage.getItem('page') != '1') {
      this.disableLoadLessProductBycategoryId = true;
      this.disableLoadMoreProductBycategoryId = true;
    } else if (localStorage.getItem('page') == '1') {


      this.disableLoadLessProductBycategoryId = false;
      this.disableLoadMoreProductBycategoryId = true;


    }

    this.homeproductServices.getAllWithLoadMoreProductWithCategoryId(this.categoryObj.id, String(this.pageNumber)).subscribe(
      res => {
        this.productList = res.data.map((item) => {
          item.image_path = this.url + item.image_path + item.item_image;
          return item;
        });
      }
    )
  }



  // button load more products by id with IPaginator
    //check if number of storing pages more than number of total number to show previous products by id from pagination.
  loadMoreProductBycategoryId() {
    // diasble button of all product to able button of product by category id
    this.disableLoadMore = false;
    this.disableLoadLess = false;


    this.categoryObj.id = Number(localStorage.getItem('categoryObjId'));

    if ((Number(localStorage.getItem('totalpage')) - Number(localStorage.getItem('page'))) == 1) {
      this.disableLoadMoreProductBycategoryId = false;
    }


    this.pageNumber = 1 + Number(localStorage.getItem('page'))
    localStorage.setItem('page', String(this.pageNumber))

    if (localStorage.getItem('page') != '1') {
      this.disableLoadLessProductBycategoryId = true;
    }

    this.homeproductServices.getAllWithLoadMoreProductWithCategoryId(this.categoryObj.id, String(this.pageNumber)).subscribe(
      res => {
        this.productList = res.data.map((item) => {
          item.image_path = this.url + item.image_path + item.item_image;
          return item;
        });
      }
    )
  }

}



