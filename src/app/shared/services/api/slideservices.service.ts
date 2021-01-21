import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , } from '@angular/common/http';
import { END_POINTS } from './globals/global-config';

// about
// const API_URL = END_POINTS.About;

const API_URL = "http://leenalkhair.souq-athar.com/listing/getContract"

@Injectable({
  providedIn: 'root'
})
export class SlideservicesService {

  constructor(private http: HttpClient) { }





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
