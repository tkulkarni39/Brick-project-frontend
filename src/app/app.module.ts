import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FinalComponent } from './final/final.component';
import { CustomerVerificationComponent } from './customer-verification/customer-verification.component';
import { FormsModule, ReactiveFormsModule, FormGroup,FormControl } from '@angular/forms';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    FinalComponent,
    CustomerVerificationComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
