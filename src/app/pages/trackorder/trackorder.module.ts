import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackorderRoutingModule } from './trackorder-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TrackorderComponent } from './trackorder.component';


@NgModule({
  declarations: [
    TrackorderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TrackorderRoutingModule,
    ReactiveFormsModule
  ]
})
export class TrackorderModule { }
