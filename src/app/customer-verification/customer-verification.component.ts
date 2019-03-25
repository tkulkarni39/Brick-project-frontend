import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-customer-verification',
  templateUrl: './customer-verification.component.html',
  styleUrls: ['./customer-verification.component.css']
})
export class CustomerVerificationComponent  {

  constructor(private router: Router, private route: ActivatedRoute, private serv : ServiceService) { }

 
  customerId: string;
  day : boolean;
  coupon : boolean
  cost;

  Verification(){
    
    this.serv.getCustomer(this.customerId).subscribe(res => 
     { 
       debugger;
      this.cost = res.cost;
      this.costCalculate();
      
    });    
  }

  costCalculate(): any {
    this.cost+=50;
    if(this.day)
    {
      this.cost += 50;
    }
    if(this.coupon)
    {
      this.cost -=50;
    }

    this.router.navigateByUrl('/final/'+this.cost);
  }
}
