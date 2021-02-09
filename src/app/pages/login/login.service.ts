import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { END_POINTS } from '../../shared/services/api/globals/global-config';
import { BehaviorSubject, Observable } from 'rxjs';
import {UserDATA} from './loginUser'
import { UserLogin } from './login.model';
import { tap } from 'rxjs/operators';


const API_LOG_IN = END_POINTS.log_in;

@Injectable({
  providedIn: 'root'
})
export class loginService {


  currentUser = new BehaviorSubject(null);

  constructor(public http:HttpClient) {
    if(localStorage.getItem('userData')!=null){
      this.currentUser.next(JSON.parse(localStorage.getItem('userData')))
    }
  }


    PostUser(user: UserLogin) {
      return this.http.post(API_LOG_IN, user).pipe(
        tap(
          res => {
           localStorage.setItem('token',Object.values(res)[1]);
    }
        ))}



  }






