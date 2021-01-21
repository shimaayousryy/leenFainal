import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Products} from './product.model';
import {Observable} from 'rxjs'
import { END_POINTS } from '../../shared/services/api/globals/global-config';
import { DataWithRanking } from '../../shared/models/data-with-ranking.model';


// API Products Called from Endpoint
const API_product = END_POINTS.product

@Injectable({
  providedIn: 'root'
})


export class HomeproductService  {


// inject http client to access with server api ( web services )
  constructor(public http:HttpClient) {

  }


  // get all product
  getAll(): Observable<DataWithRanking<Products>> {
    return this.http.get<DataWithRanking<Products>>(API_product  ) }
  }


