import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
import { TermsComponent } from './terms/terms.component';
import { ContractComponent } from './contract/contract.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmphoneComponent } from './confirmphone/confirmphone.component';



@NgModule({
  declarations: [
    ConfirmphoneComponent,
    
],
  imports: [
     CommonModule,
     BrowserAnimationsModule,
    FormsModule,
    RouterModule ,
    SharedModule
  ],
  exports: [


   ]
})
export class PagesModule { }
