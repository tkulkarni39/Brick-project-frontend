import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  constructor(private router: Router, private route: ActivatedRoute, private serv : ServiceService) { }

  customerId: string;
  HouseDist: number;
  floor: number;
  day: boolean;
  coupon: boolean;

  UserRegistration(){
    var cost = this.costCalculate();
    this.serv.postCustomer(this.customerId, this.HouseDist, this.floor, this.day, this.coupon, cost).subscribe(res=>
      {
        if(res)
        {
          //debugger;
          
          this.router.navigateByUrl('/final/'+ cost);
        }
      });
    
  }
  costCalculate(): any {
    var cost = 950;
    if(this.HouseDist >= 10 && this.HouseDist <=50)
    {
       cost +=50;
    }
    if(this.HouseDist > 50 )
    {

       cost +=(this.HouseDist - 50) * 5;
    }
    if(this.floor > 0 && this.floor <=5)
    {
       cost +=50;
    }
    if(this.floor > 5 )
    {

       cost +=(this.floor - 5) * 5;
    }
    if(this.day)
    {
      cost +=50;
    }
    if(this.coupon)
    {
      cost -=50;
    }
    return cost;
    
  }
}
