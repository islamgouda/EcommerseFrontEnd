import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory, ICategoryResponse } from '../interfaces/icategory';
import { INewCategoryWithSubCategoryResponse } from '../interfaces/iproduct';

import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  endPoint:string = environment.apiURL;
  constructor(private http:HttpClient, private genericApiHandlerService:GenericApiHandlerService) {}


  
  add(model:ICategory):Observable<ICategoryResponse>{
    let url="http://localhost:5092/api/Category/AddnewCategory";
    return this.http.post<ICategoryResponse>(url,model).pipe(
      retry(3),
      );
  }
  update(id:number,model:ICategory){
    let url="http://localhost:5092/api/Category/updateCategory?Id="+id;
    return this.http.put(url,model).pipe(
      retry(3),
      );
  }
  
  delete(id:number){
    let url="http://localhost:5092/api/Category/DeleteCategory?Id="+id;
    return this.http.delete(url).pipe(
      retry(3)
      );

  }
  getAll():Observable<ICategoryResponse>{
    let url="http://localhost:5092/api/Category/GetallCategories";
    return this.http.get<ICategoryResponse>(url).pipe(
      retry(3),
      );
  }

  getById(id:number):Observable<ICategoryResponse>{
    let url="http://localhost:5092/api/Category/GetCategoryById?Id="+id;
    return this.http.get<ICategoryResponse>(url).pipe(
      retry(3),
      );
  }

  
 getAllCategoriesWithSubCategories():Observable<INewCategoryWithSubCategoryResponse>{
  let url = "http://localhost:5092/api/ProductCategory";
    return  this.http.get<INewCategoryWithSubCategoryResponse>(url).pipe(
      retry(3)
    );
 }
   
}
