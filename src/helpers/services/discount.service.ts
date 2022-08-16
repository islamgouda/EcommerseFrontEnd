import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IDiscount, IDiscountResponse } from '../interfaces/idiscount';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  discountApi:string = "http://localhost:5092/api/Discount?id=";
  constructor(private httpClient:HttpClient,private gerericService:GenericApiHandlerService) {
    
   }

   addNewDiscount(model:IDiscount):Observable<IDiscountResponse>
   {
    return this.httpClient.post<IDiscountResponse>(this.discountApi,model)
    .pipe(catchError(error=>this.gerericService.handleError(error)));
   }
   getAllDiscounts():Observable<IDiscountResponse>
   {
    let api = "http://localhost:5092/api/Discount/GetDiscount";
    return this.httpClient.get<IDiscountResponse>(api)
          
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
  updateDiscount(id:number,model:IDiscount):Observable<IDiscountResponse>
  {
   let discountApii:string = "http://localhost:5092/api/Discount?Id="+id;
    return this.httpClient.put<IDiscountResponse>(`${discountApii}`,model,this.gerericService.httpOptions);
    
  }


}
