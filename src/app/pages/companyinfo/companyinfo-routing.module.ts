import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyinfoComponent } from './companyinfo.component';

const routes: Routes = [
  {path:'' , component:CompanyinfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyinfoRoutingModule { }
