import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> a27b93b (update)


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    SignupRoutingModule,
=======
    FormsModule,
    SignupRoutingModule,
    HttpClientModule,
>>>>>>> a27b93b (update)
    ReactiveFormsModule
  ]
})
export class SignupModule { }
