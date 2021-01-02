import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { ContractComponent } from './contract.component';


@NgModule({
  declarations: [
    ContractComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    ContractRoutingModule,
    NzDatePickerModule ,

  ]

})
export class ContractModule { }
