import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICategory } from '../interfaces/icategory';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryUrl:string="http://localhost:3000/categories";
  constructor(private http:HttpClient, private genericApiHandlerService:GenericApiHandlerService) 
  {

  }

  addNewCategory(categoryModel:ICategory):Observable<ICategory>{
    return this.http.post<ICategory>(this.categoryUrl,JSON.stringify(categoryModel)
    ,this.genericApiHandlerService.httpOptions).
    pipe(catchError(error=>this.genericApiHandlerService.handleError(error)));
  }

  getAllCategories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.categoryUrl).
    pipe(retry(3),catchError((error)=>this.genericApiHandlerService.handleError(error)));
  }

  deleteCategory(id:any):Observable<boolean>{
    return this.http.delete<boolean>(this.categoryUrl+"/"+id).
    pipe(catchError((error)=>this.genericApiHandlerService.handleError(error)));
  }
  getCategoryById(id:number):Observable<ICategory>{
    return this.http.get<ICategory>(this.categoryUrl+"/"+id)
    .    pipe(retry(3),catchError((error)=>this.genericApiHandlerService.handleError(error)));
  }  
  updateCategory(id:number,model:ICategory){
    return this.http.put(`${this.categoryUrl}/${id}`,model,this.genericApiHandlerService.httpOptions).
    pipe(catchError((error)=>this.genericApiHandlerService.handleError(error)))
  }
}
