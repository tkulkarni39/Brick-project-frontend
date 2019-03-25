import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FinalComponent } from './final/final.component';
import { CustomerVerificationComponent } from './customer-verification/customer-verification.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent, pathMatch: 'full'},
  {path: 'final/:cost', component: FinalComponent, pathMatch: 'full'},
  {path: 'verification', component: CustomerVerificationComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
