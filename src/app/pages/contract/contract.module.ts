import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContractComponent } from './contract.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ContractComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    NzDatePickerModule ,

  ]

})
export class ContractModule { }
