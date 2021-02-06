import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Products } from './product.model';
import { HomeproductService } from './homeproduct.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SearchPipe } from './search.pipe';
import { SeemorePipe } from './seemore.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    SearchPipe,
    SeemorePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    HttpClientModule ,

    NgxPaginationModule,
    DropDownsModule
    // Products,
    // HomeproductService
    

  ],

})
export class HomeModule { }
