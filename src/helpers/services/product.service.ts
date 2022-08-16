import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IDisplayProducts } from '../interfaces/idisplay-products';
import { IProduct, IProductResponse } from '../interfaces/iproduct';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productApi:string = "http://localhost:3000/products";
  constructor(private httpClient:HttpClient,private gerericService:GenericApiHandlerService) {
    
   }


   add(model:IProduct):Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product";
    return this.httpClient.post<IProductResponse>(url,model).pipe(
      retry(3),
    );
   }

   update(id:number,model:IProduct):Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product/updateProduct/"+id;
    return this.httpClient.put<IProductResponse>(url,model).pipe(
      retry(3),
    );
   }
   delete(id:number):Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product/DeleteProductById/"+id;
    return this.httpClient.delete<IProductResponse>(url).pipe(
      retry(3),
    );
   }
   getById(id:number){
    let url = ""+id;
    return this.httpClient.get(url).pipe(
      retry(3),
    );
   }
   getProductsByCategoryId(id:number){
    let url = "http://localhost:5092/api/Product/CategoryProducts/"+id;
    return this.httpClient.get(url).pipe(
      retry(3),
    );
   }
   getProductsBySubCategoryId(id:number){
    let url = "http://localhost:5092/api/Product/SubCategoryProducts/"+id;
    return this.httpClient.get(url).pipe(
      retry(3),
    );
   }
   getProductsByPartner(){
    let url = "http://localhost:5092/api/Product/PartnerProducts";
    return this.httpClient.get(url).pipe(
      retry(3),
    );
   }
   getProductsPartnerByCategoryId(id:number){
    let url = "http://localhost:5092/api/Product/PartnerProductsByCategory/"+id;
    return this.httpClient.get(url).pipe(
      retry(3),
    );
   }
   getProductsPartnerBySubCategoryId(id:number){
    let url = "http://localhost:5092/api/Product/PartnerProductsBySubCategory/"+id;
    return this.httpClient.get(url).pipe(
      retry(3),
    );
   }





  //  ---------------------------------------delete after crud with API-----------------------------------------------------
   addNewProduct(model:IProduct):Observable<IProduct>
   {
    return this.httpClient.post<IProduct>(this.productApi,model,this.gerericService.httpOptions)
    .pipe(catchError(error=>this.gerericService.handleError(error)));
   }
   getAllProducts():Observable<IDisplayProducts[]>
   {
    return this.httpClient.get<IDisplayProducts[]>(this.productApi,this.gerericService.httpOptions).
           pipe(
            catchError(error=>this.gerericService.handleError(error))
           );
   }
   getProducts():Observable<IProduct[]>
   {
    return this.httpClient.get<IProduct[]>(this.productApi,this.gerericService.httpOptions).
           pipe(
            catchError(error=>this.gerericService.handleError(error))
           );
   }
   deleteProduct(id:number):Observable<boolean>
   {
     return this.httpClient.delete<boolean>(`${this.productApi}/${id}`).pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
   }
   getProductById(id:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(this.productApi+"/"+id)
    .    pipe(retry(3),catchError((error)=>this.gerericService.handleError(error)));
  } 
  getProductInDetailsById(id:number):Observable<IDisplayProducts>{
    return this.httpClient.get<IDisplayProducts>(this.productApi+"/"+id)
    .    pipe(retry(3),catchError((error)=>this.gerericService.handleError(error)));
  } 
  updateProduct(id:number,model:IProduct):Observable<boolean>
  {
    return this.httpClient.put<boolean>(`${this.productApi}/${id}`,model,this.gerericService.httpOptions).pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
  }
  
}
