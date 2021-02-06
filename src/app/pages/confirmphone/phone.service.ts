import { Injectable } from '@angular/core';
import { END_POINTS } from '../../shared/services/api/globals/global-config';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {PhoneCode} from './phone.model'

const API_confirm_number = END_POINTS.confirm_number;
@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(public http:HttpClient) { }

    
  confirmPhone(model: PhoneCode): Observable<PhoneCode> {
    return this.http.post<PhoneCode>(API_confirm_number , model);
  }

}
