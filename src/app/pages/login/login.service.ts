import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class loginService {

  constructor(public http:HttpClient) { }


    // PostOnlineServices(model: OnlineSupport): Observable<OnlineSupport> {
    //   return this.http.post<OnlineSupport>(API_URL_OnlineSupport, model);
    // }

  }






