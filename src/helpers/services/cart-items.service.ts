import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IAddToCart, IAddToCartResponse } from '../interfaces/iproduct';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  constructor(private httpClient:HttpClient,private gerericService:GenericApiHandlerService) { }

  addToCartItems(model:IAddToCart):Observable<IAddToCartResponse>{
    let url = "http://localhost:5092/api/CartItem/AddToCart";
    return this.httpClient.post<IAddToCartResponse>(url,model).pipe(
      retry(3),
      catchError(error=>this.gerericService.handleError(error))
    );
  }

  getAllCartItems():Observable<IAddToCartResponse>{
    let url = "http://localhost:5092/api/CartItem/howMyCartItems";
    return this.httpClient.get<IAddToCartResponse>(url).pipe(
      retry(3),
      catchError(error=>this.gerericService.handleError(error))
    );
  }
  deleteFromCart(id:number){
    let url="http://localhost:5092/api/CartItem/deleteFromCard?id="+id;
    return this.httpClient.delete(url).pipe(
      retry(3),
      catchError(error=>this.gerericService.handleError(error))
    );
  }
}
