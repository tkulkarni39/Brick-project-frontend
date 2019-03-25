import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import  { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  postCustomer(ID: string, HouseDist: number, floor: number, day: boolean, coupon: boolean, cost):Observable<boolean>
  {
   // debugger;
  //console.log();
  let body = JSON.stringify({id: ID, houseDist: HouseDist, floor: floor, day: day, coupon: coupon, cost : cost});
  let headersOptions ={headers : new HttpHeaders({ 'Content-Type': 'application/json'})};
   
  return this._http.post<boolean>("https://localhost:5001/api/Brick/addCustomer",body, headersOptions);
  
  }

  getCustomer(ID: string):Observable<any>
  {
    debugger;
  //console.log();
  
  let headersOptions ={headers : new HttpHeaders({ 'Content-Type': 'application/json'})};
   
  return this._http.get<boolean>("https://localhost:5001/api/Brick/getCustomer?id="+ID);
  
  }

}
