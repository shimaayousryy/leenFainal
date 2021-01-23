import { Injectable } from '@angular/core';
import { END_POINTS } from '../../shared/services/api/globals/global-config';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Users} from './signup.model'
import { Observable } from 'rxjs';
const API_sign_up  = END_POINTS.sign_up 

@Injectable({
  providedIn: 'root'
})
export class signUpService {

  constructor(public http:HttpClient) { }


  
  // PostOnlineServices(model: Users): Observable<Users> {
  //   return this.http.post<Users>(API_sign_up , model);
  // }

  }






