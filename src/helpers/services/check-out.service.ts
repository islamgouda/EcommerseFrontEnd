import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IAddressResponse, IShipperResponse } from '../interfaces/icheckout';
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

}
