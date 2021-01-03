import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { END_POINTS } from './globals/global-config';
import { Contract } from '../../models/contract.model';

// about
// const API_URL = END_POINTS.About;

const API_URL = "http://leenalkhair.souq-athar.com"

@Injectable({
  providedIn: 'root'
})
export class SlideservicesService {

  constructor(private http: HttpClient) { }

  /******************post contract method******************/
  createContract(model:Contract):Observable<Contract>{
    return this.http.post<Contract>(API_URL , model)
  }

  // get about
  // getAll(): Observable<About[]> {
  //   return this.http.get<About[]>(API_URL);
  // }


  // getall():Observable<any>{
  //   return
  // }

  // get news
  // PostOnlineServices(model: OnlineSupport): Observable<OnlineSupport> {
  //   return this.http.post<OnlineSupport>(API_URL_OnlineSupport, model);
  // }



  // get sub Category By id
  // getSubcategoryById(id: string): Observable<SubCategory[]> {
  //   return this.http.get<SubCategory[]>(API_URL_SubCategory + `/${id}`);
  // }


}
