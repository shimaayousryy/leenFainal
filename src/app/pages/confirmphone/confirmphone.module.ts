import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmphoneRoutingModule } from './confirmphone-routing.module';
import {ConfirmphoneComponent} from './confirmphone.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ConfirmphoneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConfirmphoneRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ConfirmphoneModule { }
