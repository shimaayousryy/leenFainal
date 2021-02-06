import { Injectable } from '@angular/core';
<<<<<<< HEAD

=======
import { END_POINTS } from '../../shared/services/api/globals/global-config';
import {HttpClient} from '@angular/common/http'
import {Contract} from './contract.model'
import { Observable } from 'rxjs';
import {Duration} from './duration.model'
import {Timing} from './time.model';

const API_contract = END_POINTS.contract; 
const API_contract_duration = END_POINTS.contract_duration;
const API_contract_timing = END_POINTS.contract_timing;
>>>>>>> a27b93b (update)

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class contractService {

  constructor() { }

  }






=======



export class ContractService {


  constructor(public http:HttpClient) { }


  // create contract method
  contractForm(model: Contract): Observable<Contract> {
    return this.http.post<Contract>(API_contract , model);
  }
  // get delivary period of contract
  getContractDuration() : Observable<Duration[]>{
    return this.http.get<Duration[]>(API_contract_duration )
  }


   // get delivary time of contract
   getContractTime() : Observable<Timing[]>{
    return this.http.get<Timing[]>(API_contract_timing )
  }
}
>>>>>>> a27b93b (update)
