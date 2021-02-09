import { Injectable } from '@angular/core';
import {END_POINTS} from '../../shared/services/api/globals/global-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import {TERMS} from './terms.model'

const API_terms= END_POINTS.terms;

@Injectable({
  providedIn: 'root'
})
export class TermsService {


  constructor(public http: HttpClient) { }


  getAllTerms(): Observable<TERMS[]> {
    return this.http.get<TERMS[]>(API_terms)
  }
}
