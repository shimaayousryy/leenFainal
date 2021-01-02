import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyinfoRoutingModule } from './companyinfo-routing.module';

import { NzUploadModule , } from 'ng-zorro-antd/upload';
import { CompanyinfoComponent } from './companyinfo.component';



@NgModule({
  declarations: [
    CompanyinfoComponent
   
  ],
  imports: [
    CommonModule,
    CompanyinfoRoutingModule,
    NzUploadModule,

    
  ]
})
export class CompanyinfoModule { }
