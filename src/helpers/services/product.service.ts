import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IDisplayProducts } from '../interfaces/idisplay-products';
import { IAddToCart, IAddToCartResponse, IProduct, IProductResponse, ISignAsApprovedResponse } from '../interfaces/iproduct';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productApi:string = "http://localhost:3000/products";
  constructor(private httpClient:HttpClient,private gerericService:GenericApiHandlerService) {
    
   }


   add(model:any){
    let url = "http://localhost:5092/api/Product";
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == XMLHttpRequest.DONE) {
          alert(request.responseText);
      }
  }
    let token = localStorage.getItem("token");
    request.setRequestHeader("UserId",token!);
    request.open("post", url);
    request.send(model);
    return request.DONE;
    
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
   getById(id:number):Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product/getmyproductbyID?productID="+id;
    return this.httpClient.get<IProductResponse>(url).pipe(
      retry(3),
    );
   }
   getProductsByCategoryId(id:number):Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product/CategoryProducts/"+id;
    return this.httpClient.get<IProductResponse>(url).pipe(
      retry(3),
    );
   }
   getProductsBySubCategoryId(id:number):Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product/SubCategoryProducts/"+id;
    return this.httpClient.get<IProductResponse>(url).pipe(
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

   getProducts():Observable<IProductResponse>
   {
    let url = "http://localhost:5092/api/Product";
    return this.httpClient.get<IProductResponse>(url,this.gerericService.httpOptions).
           pipe(
   catchError(error=>this.gerericService.handleError(error))
           );
    }

   getAllPendingProducts():Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product/UnApprovedProducts";
    return this.httpClient.get<IProductResponse>(url).
           pipe(
          catchError(error=>this.gerericService.handleError(error))
           );
   }
   
  signAsApproved(id:number):Observable<ISignAsApprovedResponse>{
    let url = "http://localhost:5092/api/Product/ApproveProduct/"+id;
    return this.httpClient.get<ISignAsApprovedResponse>(url).
           pipe(
          catchError(error=>this.gerericService.handleError(error))
           );
  }
  getAnyProductById(id:Number):Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product/GetAnyProduct/"+id;
    return this.httpClient.get<IProductResponse>(url).
    pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
  }

  getProductsByArabicName(stringText:string):Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product/ProductsByArabicName?Name="+stringText;
    return this.httpClient.get<IProductResponse>(url).
    pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
  }
  getProductsByEnglishName(stringText:string):Observable<IProductResponse>{
    let url = "http://localhost:5092/api/Product/ProductsByName?Name="+stringText;
    return this.httpClient.get<IProductResponse>(url).
    pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
  }
  
}
