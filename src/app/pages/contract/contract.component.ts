import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Contract } from '../../shared/models/contract.model';
import { SlideservicesService } from 'src/app/shared/services/api';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {


  contract:Contract = new Contract;

  data:string;

  
  constructor(private _Router:Router ,
     private _SlideservicesService:SlideservicesService) { }


  // goToCart(){
  //   this._Router.navigate(['home']);;
  //   localStorage.setItem('permission' , 'done')
  // }
  ngOnInit(): void {
    
    // init main object
    this.contract = new Contract();
  }
  /******************post contract method******************/
  test(){
    this._SlideservicesService.createContract(this.contract).subscribe( res => {
    this.contract=res;
    console.log(this.contract)
   })
   }  
  /******************end post contract method******************/

}
