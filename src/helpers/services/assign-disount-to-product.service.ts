import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IAssignDisountToProduct } from '../interfaces/iassign-disount-to-product';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AssignDisountToProductService {

  assignAPI:string="http://localhost:5092/api/Discount/DiscountAssign";
  constructor(private httpClient:HttpClient,private genericErrorService:GenericApiHandlerService) { }
  assignDiscount(model:IAssignDisountToProduct):Observable<boolean>{
    return this.httpClient.post<boolean>(this.assignAPI,model).pipe(
      catchError(error=>this.genericErrorService.handleError(error))
    )
  }

}
