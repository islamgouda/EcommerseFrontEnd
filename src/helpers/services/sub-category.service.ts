import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISubCategory, I_SubCategory } from '../interfaces/isub-category';
import { GenericApiHandlerService } from './generic-api-handler.service';


@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  subCategoryUrl:string = "http://localhost:3000/subCategories";
  subCatEndPoint:string=environment.apiURL;
  constructor(private httpClient:HttpClient,private gerericService:GenericApiHandlerService) {
   }

   addNewSubCategory(model:I_SubCategory):Observable<I_SubCategory>
   {
    return this.httpClient.post<I_SubCategory>(this.subCatEndPoint+"/api/SubCategory/CreateSubCategory",model)
    .pipe(catchError(error=>this.gerericService.handleError(error)));
   }

   updateSubCategory(id:number,model:I_SubCategory):Observable<boolean>
   {
     return this.httpClient.put<boolean>(`${this.subCategoryUrl}/${id}`,model,this.gerericService.httpOptions).pipe(
       catchError(error=>this.gerericService.handleError(error))
     );
   }


  //  ========================================================================
  //  ========================================================================
  //  ---------------------local host ----------------------------------------
  //  ========================================================================
  //  ========================================================================
   
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
  getSubCategoriesByCategoryId(id:number):Observable<ISubCategory[]>{
    // ------------start real code from API----------------------------------------------------
    // function return type ==> 
    return this.httpClient.get<ISubCategory[]>(this.subCategoryUrl+"/"+id,this.gerericService.httpOptions).
    pipe(catchError(error=>this.gerericService.handleError(error)));
    //-------------end real code from API------------------------------------------------------
  
  }
  

}
