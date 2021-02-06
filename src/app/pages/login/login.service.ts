import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
<<<<<<< HEAD

=======
import {UserLogin} from './login.model'
import { END_POINTS } from '../../shared/services/api/globals/global-config';
import { BehaviorSubject, Observable } from 'rxjs';
import {UserDATA} from './loginUser'

const API_LOG_IN = END_POINTS.log_in;
>>>>>>> a27b93b (update)

@Injectable({
  providedIn: 'root'
})
export class loginService {
<<<<<<< HEAD

  constructor(public http:HttpClient) { }


    // PostOnlineServices(model: OnlineSupport): Observable<OnlineSupport> {
    //   return this.http.post<OnlineSupport>(API_URL_OnlineSupport, model);
    // }
=======
  currentUser = new BehaviorSubject(null);

  constructor(public http:HttpClient) { 
    if(localStorage.getItem('userData')!=null){
      this.currentUser.next(JSON.parse(localStorage.getItem('userData')))
    }
  }


    PostUser(model: UserLogin): Observable<UserLogin> {
      return this.http.post<UserLogin>(API_LOG_IN, model);
    }

    saveUserData(  email , password, token){
      let user = new UserDATA( email , password , token);
      localStorage.setItem('userData' , JSON.stringify(user));
      this.currentUser.next(user);
    }
  
>>>>>>> a27b93b (update)

  }






