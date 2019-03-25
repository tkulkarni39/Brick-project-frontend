import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router: Router) { }

  private cost : number;
  private route$ : Subscription;
  ngOnInit() {
    this.route$ = this.route.params.subscribe(
      (params : Params) => {
          this.cost = +params["cost"]; // cast to number
      }
  );
  }
  home(){
    this.router.navigateByUrl('/');
  }
}
