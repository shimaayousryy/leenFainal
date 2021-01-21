import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Products} from './product.model';
import {Observable} from 'rxjs'
import { END_POINTS } from '../../shared/services/api/globals/global-config';

const API_product = END_POINTS.product

@Injectable({
  providedIn: 'root'
})
export class HomeproductService  {



  constructor(public http:HttpClient) {

  }
 

  // getAll(): Observable<Products[]> {
  //   return this.http.get<Products[]>(API_product);
  // }

  getAll(): Observable<Products[]> {
       return this.http.get<Products[]>(API_product);
    }

}
