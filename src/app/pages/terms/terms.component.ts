import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {TERMS} from './terms.model'
import {TermsService} from './terms.service'

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

   // termstList Array
  
   privacy;

   termList : TERMS[]=[];
   termObj:TERMS = new TERMS();

   Title:SafeHtml;
   Description:SafeHtml;
 
  constructor(private _router: Router , public TermsService:TermsService ,
    public sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
    this.termObj =new TERMS();
    this.getTermsData()
  }

  getTermsData(){
    this.TermsService.getAllTerms().subscribe(res =>{
      
      // this.termList = res[1].en_page_content;
      // this.Description = res[2].en_page_content;
      this.termList = res.map(item=>{
        item.en_page_content = item.en_page_content.split('pre').join(`p`)
        item.en_page_content = item.en_page_content.split('strong').join(`p`)
        item.en_page_content = item.en_page_content.split(`\n`).join(`<br />`)
        this.Description = item.en_page_content;
        this.Title = item.en_page_title
        return item
      }
        
      )

 
      
    })
  }


  goToSignupPage(){
    this._router.navigate(['signup'])
  }
}
