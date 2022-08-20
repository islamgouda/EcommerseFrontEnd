import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IAddressResponse, IBuy, IBuyResponse, IPaymentMethodResponse, IShipperResponse } from '../interfaces/icheckout';
import { IPaymentMethod } from '../interfaces/ipayment-method';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  constructor(private http:HttpClient,private genericService:GenericApiHandlerService) { }
  getAllShipper():Observable<IShipperResponse>{
    let url = "http://localhost:5092/api/Shipper";
    return this.http.get<IShipperResponse>(url).pipe(
      retry(3),
      catchError(error=>this.genericService.handleError(error))
    );
  }  
  getallUserAddresses():Observable<IAddressResponse>{
    let url = "http://localhost:5092/api/UserAddress/GetUserAdress";
    return this.http.get<IAddressResponse>(url).pipe(
      retry(3),
      catchError(error=>this.genericService.handleError(error))
    );
  }
  addNewPaymentMethod(model:IPaymentMethod){
    let url = "http://localhost:5092/api/UserPayment";
    return this.http.post(url,model).pipe(
      retry(3),
      catchError(error=>this.genericService.handleError(error))
    );
  }
  getAllPaymentMethods():Observable<IPaymentMethodResponse>{
    let url="http://localhost:5092/api/UserPayment";
    return this.http.get<IPaymentMethodResponse>(url).pipe(
      retry(3),
      catchError(error=>this.genericService.handleError(error))
    );
  }

  confirmBuy(model:IBuy):Observable<IBuyResponse>{
    let url = "http://localhost:5092/api/Buy/BuyNow";
    return this.http.post<IBuyResponse>(url,model).pipe(
      retry(3),
      catchError(error=>this.genericService.handleError(error))
    );
  }
}
