import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

 import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './pages/login/auth.guard';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', loadChildren: async () => (await import('./pages/home/home.module')).HomeModule,},
  {path:'contactus' ,  loadChildren: async () => (await import('./pages/contactus/contactus.module')).ContactusModule,},
  {path:'login' ,  loadChildren: async ()=>(await import('./pages/login/login.module')).LoginModule},
  {path:'trackorder' ,  loadChildren: async () => (await import('./pages/trackorder/trackorder.module')).TrackorderModule},
  {path:'signup' ,   loadChildren: async () => (await import('./pages/signup/signup.module')).SignupModule },
  {path:'companyinfo' ,   loadChildren: async () => (await import('./pages/companyinfo/companyinfo.module')).CompanyinfoModule},
  {path:'Contract' ,   loadChildren: async () => (await import('./pages/contract/contract.module')).ContractModule},

  {path:'confirmphone' ,  loadChildren: async () => (await import('./pages/confirmphone/confirmphone.module')).ConfirmphoneModule},
  {path:'cart' ,   loadChildren: async () => (await import('./pages/cart/cart.module')).CartModule},
  {path:'terms' ,   loadChildren: async () => (await import('./pages/terms/terms.module')).TermsModule},
  {path:'**' , pathMatch: 'full', redirectTo: 'home'}

];

//  canActivate:[AuthGuard],

@NgModule({
  imports: [
    RouterModule.forRoot(routes , {
   preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
