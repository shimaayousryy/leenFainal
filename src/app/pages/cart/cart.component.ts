import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _Router:Router) { }


  goToHome(){
  
    this._Router.navigate(['home']);
    localStorage.setItem('permission' , 'done')
    
  }
  ngOnInit(): void {
    
  }


}
