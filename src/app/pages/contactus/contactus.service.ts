import { Injectable } from '@angular/core';
<<<<<<< HEAD


@Injectable({
  providedIn: 'root'
})
export class contactUsService {

  constructor() { }

  }






=======
import { END_POINTS } from '../../shared/services/api/globals/global-config';
import {HttpClient} from '@angular/common/http'
import {  Observable } from 'rxjs';
import {ContactUs} from './contactus.model' ;


const API_contact_us = END_POINTS.contact_us;

@Injectable({
  providedIn: 'root'
})


export class ContactusService {

  constructor(public http:HttpClient) { }

  //get api link to send data 
   contactUsForm(model: ContactUs): Observable<ContactUs> {
    return this.http.post<ContactUs>(API_contact_us, model);
  }

}
>>>>>>> a27b93b (update)
