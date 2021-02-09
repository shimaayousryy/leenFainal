import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShellModule } from './shell/shell.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PagesModule } from './pages/pages.module';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';


import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ErrorInterceptor, JwtInterceptor } from './shared/services/api/interceptors';




registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
     BrowserModule,
    FormsModule,
    AppRoutingModule ,
    ShellModule ,
    PagesModule,
    NgxSpinnerModule,
    HttpClientModule,
    NzButtonModule,
    NzUploadModule,
    SharedModule,
    RouterModule,

    BrowserAnimationsModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
