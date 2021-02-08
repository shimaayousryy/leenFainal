import { Injectable } from '@angular/core';
import { END_POINTS } from 'src/app/shared/services/api/globals/global-config';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {COMPANYINFO} from './companyinfo.model'
import { IDTYPE } from './idtype.model';
import { DataWithRanking } from 'src/app/shared/models';

const API_company_info = END_POINTS.add_busniess;
const API_id_type = END_POINTS.id_type;


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient ) { }


  companyInfo(model: COMPANYINFO): Observable<COMPANYINFO> {
    return this.http.post<COMPANYINFO>(API_company_info , model);
  }
  getIdType(): Observable<DataWithRanking<IDTYPE[]>> {
    return this.http.get<DataWithRanking<IDTYPE[]>>(API_id_type)

  }

 
}
