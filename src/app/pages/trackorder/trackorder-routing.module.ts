import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackorderComponent } from './trackorder.component';

const routes: Routes = [
  {path:'',component:TrackorderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackorderRoutingModule { }
