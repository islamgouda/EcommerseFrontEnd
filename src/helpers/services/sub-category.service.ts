import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ISubCategory } from '../interfaces/isub-category';
import { GenericApiHandlerService } from './generic-api-handler.service';


@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  subCategoryUrl:string = "http://localhost:3000/subCategories";
  constructor(private httpClient:HttpClient,private gerericService:GenericApiHandlerService) {
    
   }

   addNewSubCategory(model:ISubCategory):Observable<ISubCategory>
   {
    return this.httpClient.post<ISubCategory>(this.subCategoryUrl,model,this.gerericService.httpOptions)
    .pipe(catchError(error=>this.gerericService.handleError(error)));
   }
   getAllSubCategories():Observable<ISubCategory[]>
   {
    return this.httpClient.get<ISubCategory[]>(this.subCategoryUrl,this.gerericService.httpOptions).
           pipe(
            catchError(error=>this.gerericService.handleError(error))
           );
   }
   deteleSubCategory(id:number):Observable<boolean>
   {
     return this.httpClient.delete<boolean>(`${this.subCategoryUrl}/${id}`).pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
   }
   getSubCategoryById(id:number):Observable<ISubCategory>{
    return this.httpClient.get<ISubCategory>(this.subCategoryUrl+"/"+id)
    .    pipe(retry(3),catchError((error)=>this.gerericService.handleError(error)));
  } 
  updateSubCategory(id:number,model:ISubCategory):Observable<boolean>
  {
    return this.httpClient.put<boolean>(`${this.subCategoryUrl}/${id}`,model,this.gerericService.httpOptions).pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
  }

}
