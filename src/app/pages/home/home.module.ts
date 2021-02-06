import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Products } from './product.model';
import { HomeproductService } from './homeproduct.service';
<<<<<<< HEAD
=======
import { NgxPaginationModule } from 'ngx-pagination';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SearchPipe } from './search.pipe';
import { SeemorePipe } from './seemore.pipe';
>>>>>>> a27b93b (update)


@NgModule({
  declarations: [
<<<<<<< HEAD
    HomeComponent
=======
    HomeComponent,
    SearchPipe,
    SeemorePipe
>>>>>>> a27b93b (update)
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    HttpClientModule ,
<<<<<<< HEAD
=======
    NgxPaginationModule,
    DropDownsModule
>>>>>>> a27b93b (update)
    // Products,
    // HomeproductService
    

  ],

})
export class HomeModule { }
