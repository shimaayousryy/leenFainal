import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  flag:boolean=true;
  constructor(private _router: Router) { }


  goToConfirmNum(){
    this.flag = false;
  }
  goToCcompanyinfo(){
    this._router.navigate(['companyinfo'])
  }


  ngOnInit(): void {
  }

}
