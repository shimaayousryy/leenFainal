import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyinfoRoutingModule } from './companyinfo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzUploadModule , } from 'ng-zorro-antd/upload';
import { CompanyinfoComponent } from './companyinfo.component';



@NgModule({
  declarations: [
    CompanyinfoComponent
   
  ],
  imports: [
    CommonModule,
    CompanyinfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzUploadModule,

    
  ]
})
export class CompanyinfoModule { }
