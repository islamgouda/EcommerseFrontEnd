import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import { IUserAddress, IUserAddressResponse } from '../interfaces/iuser-address';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {

  constructor(private httpclient:HttpClient) { }
  AddUserAddress(model:IUserAddress):Observable<IUserAddressResponse>
  {
    let urlAddUserAddress="http://localhost:5092/api/UserAddress";
    return this.httpclient.post<IUserAddressResponse>(urlAddUserAddress,model).
    pipe(catchError((erro)=>{return throwError(()=>erro.message||"Internal Server Error")}));
  }
}
