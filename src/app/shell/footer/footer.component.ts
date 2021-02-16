import { Component, OnInit } from '@angular/core';
import {TermsService} from '../../pages/terms/terms.service';
import {TERMS} from '../../pages/terms/terms.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    // termstList Array
    termList: TERMS[] = [];
    termObj:TERMS = new TERMS();
  constructor(private _router: Router , public TermsService:TermsService) { }

  ngOnInit(): void {
    this.termObj =new TERMS();
    this.getTermsData()
  }

  getTermsData(){
    this.TermsService.getAllTerms().subscribe(res =>{
      this.termList = res;
      
    })
  }
  routeTOTerm(){
    this._router.navigate(['/terms'])
  }
}
