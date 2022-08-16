import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IDiscount, IDiscountResponse } from '../interfaces/idiscount';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  discountApi:string = "http://localhost:3000/discounts";
  constructor(private httpClient:HttpClient,private gerericService:GenericApiHandlerService) {
    
   }

   addNewDiscount(model:IDiscount):Observable<IDiscount>
   {
    return this.httpClient.post<IDiscount>(this.discountApi,model,this.gerericService.httpOptions)
    .pipe(catchError(error=>this.gerericService.handleError(error)));
   }
   getAllDiscounts():Observable<IDiscountResponse>
   {
    let api = "http://localhost:5092/api/Discount/GetDiscount";
    return this.httpClient.get<IDiscountResponse>(api).
           pipe(
            catchError(error=>this.gerericService.handleError(error))
           );
   }
   deteleDiscount(id:number):Observable<IDiscountResponse>
   {
      let api = "http://localhost:5092/api/Discount/DeleteDiscount?Id="+id;
      return this.httpClient.delete<IDiscountResponse>(api);
   }
   getDiscountById(id:number):Observable<IDiscountResponse>{
    let api = "http://localhost:5092/api/Discount/getDiscountByID?Id="+id;
    return this.httpClient.get<IDiscountResponse>(api)
    .    pipe(retry(3),catchError((error)=>this.gerericService.handleError(error)));
  } 
  updateDiscount(id:number,model:IDiscount):Observable<boolean>
  {
    return this.httpClient.put<boolean>(`${this.discountApi}/${id}`,model,this.gerericService.httpOptions).pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
  }


}
