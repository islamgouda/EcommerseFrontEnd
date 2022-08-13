import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory, I_Category } from '../interfaces/icategory';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 //local
 categoryUrl:string = "http://localhost:3000/categories";

  categoryEndPoint:string = environment.apiURL;
  constructor(private http:HttpClient, private genericApiHandlerService:GenericApiHandlerService) 
  {

  }

  addNewCategory(categoryModel:I_Category):Observable<I_Category>{
    
    return this.http.post<I_Category>(this.categoryEndPoint+"/Category/AddnewCategory",JSON.stringify(categoryModel)).
    pipe(catchError(error=>this.genericApiHandlerService.handleError(error)));
  }
  
  updateCategory(id:number,model:I_Category){
    //add API To Update
    return this.http.put(`${this.categoryEndPoint+""}/${id}`,model).
    pipe(catchError((error)=>this.genericApiHandlerService.handleError(error)))
  }
  
  getCategories():Observable<I_Category[]>{
    console.log(this.categoryEndPoint+"$$$$$$$$$$$$$$$$$$$$");
    return this.http.get<I_Category[]>(this.categoryEndPoint+"/api/Category/GetallCategories").
    pipe(retry(3),catchError((error)=>this.genericApiHandlerService.handleError(error)));
  }







// ===========================================================================
// ===========================================================================
// ----------------------local URL -------------------------------------------
// ===========================================================================
// ===========================================================================







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
  
}
