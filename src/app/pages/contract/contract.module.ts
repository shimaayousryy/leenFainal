import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { ContractRoutingModule } from './contract-routing.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { ContractComponent } from './contract.component';
=======
import { ContractRoutingModule } from './contract-routing.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ContractComponent } from './contract.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> a27b93b (update)


@NgModule({
  declarations: [
    ContractComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
<<<<<<< HEAD

    ContractRoutingModule,
    NzDatePickerModule ,

=======
    CommonModule,
    HttpClientModule ,
    ReactiveFormsModule,
    ContractRoutingModule,
    NzDatePickerModule ,
>>>>>>> a27b93b (update)
  ]

})
export class ContractModule { }
