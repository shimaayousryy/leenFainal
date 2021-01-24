import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus.component';


@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
