import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Products } from './product.model';
import { Observable } from 'rxjs'
import { END_POINTS } from '../../shared/services/api/globals/global-config';
import { DataWithRanking } from '../../shared/models/data-with-ranking.model';
import { category } from './category.model';

// API Products Called from Endpoint
const API_product = END_POINTS.product_no_action

// API Products Called from Endpoint
const API_productById = END_POINTS.product_By_Id


// api get all category
const API_category = END_POINTS.category_no_action


@Injectable({
  providedIn: 'root'
})


export class HomeproductService {


  // inject http client to access with server api ( web services )
  constructor(public http: HttpClient) {

  }


  // get all product
  getAll(): Observable<DataWithRanking<Products>> {
    return this.http.get<DataWithRanking<Products>>(API_product)
  }

    // get all product
    getById(id:number): Observable<DataWithRanking<Products>> {
      return this.http.get<DataWithRanking<Products>>(API_productById+`/${id}`)
    }

      // get with load more
  getAllWithLoadMoreProductWithCategoryId(id:number,page: string): Observable<DataWithRanking<Products>> {
    let params = new HttpParams();
    params = params.append('page', page);
    return this.http.get<DataWithRanking<Products>>(API_productById+`/${id}`, { params: params })
  }

  // get with load more
  getAllWithLoadMore(page: string): Observable<DataWithRanking<Products>> {
    let params = new HttpParams();
    params = params.append('page', page);
    return this.http.get<DataWithRanking<Products>>(API_product, { params: params })
  }


  // get all category
  getAllCategory(): Observable<category[]> {
    return this.http.get<category[]>(API_category)
  }
}


