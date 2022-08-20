import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IShipperDetails, IShippingDetails } from '../interfaces/ishipping-details';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http:HttpClient) { }
  getAllShipping():Observable<IShippingDetails>{
    let url = "http://localhost:5092/api/ShippingDetails/GetMyShipping";
    return this.http.get<IShippingDetails>(url).pipe(
      retry(3)
      );
  }

  getAllShippingDetails():Observable<IShipperDetails>{
    let url = "http://localhost:5092/api/ShippingDetails/shipper/getmyShipping";
    return this.http.get<IShipperDetails>(url).pipe(
      retry(3),
    );
  }
  getShippingById(id:number){
    let url = "http://localhost:5092/api/ShippingDetails/shipper/getShippingByShipID?id="+id;
    return this.http.get<IShipperDetails>(url).pipe(
      retry(3),
    );
  }
  changeStateToOnProcess(id:number):Observable<IShipperDetails>{
    let url="http://localhost:5092/api/ShippingDetails/updateshippingStateToOnProcess?shipId="+id;
    return this.http.put<IShipperDetails>(url,id).pipe(
      retry(3)
    );
  }

  changeStateToOnDelivery(id:number):Observable<IShipperDetails>{
    let url="http://localhost:5092/api/ShippingDetails/updateshippingStateToOnDelivery?shipId="+id;
    return this.http.put<IShipperDetails>(url,id).pipe(
      retry(3)
    );
  }

  changeStateToDelivered(id:number):Observable<IShipperDetails>{
    let url="http://localhost:5092/api/ShippingDetails/updateshippingStateToDelivered?shipId="+id;
    return this.http.put<IShipperDetails>(url,id).pipe(
      retry(3)
    );
  }

}
