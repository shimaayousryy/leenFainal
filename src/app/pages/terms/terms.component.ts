import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TERMS} from './terms.model'
import {TermsService} from './terms.service'
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

   // homeporoductList Array
   termList: TERMS[] = [];
   termObj:TERMS = new TERMS();
 
  constructor(private _router: Router , public TermsService:TermsService) { }

  ngOnInit(): void {
    this.termObj =new TERMS();
    this.getTermsData()
  }

  getTermsData(){
    this.TermsService.getAllTerms().subscribe(res =>{
      this.termList = res
      
    })
  }


  goToSignupPage(){
    this._router.navigate(['signup'])
  }
}
