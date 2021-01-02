import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {


  data:string | undefined;
  constructor(private _Router:Router) { }

  goToCart(){
    this._Router.navigate(['home']);;
    localStorage.setItem('permission' , 'done')
  }
  ngOnInit(): void {
  }

}
