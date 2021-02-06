import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmphoneComponent } from './confirmphone.component';

const routes: Routes = [
  {path:'',component:ConfirmphoneComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmphoneRoutingModule { }
