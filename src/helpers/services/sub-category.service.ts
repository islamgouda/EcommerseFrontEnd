import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISubCategory, ISubCategoryResponse } from '../interfaces/isub-category';
import { GenericApiHandlerService } from './generic-api-handler.service';


@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  endPoint:string=environment.apiURL;
  constructor(private http:HttpClient,private gerericService:GenericApiHandlerService) {}


  add(model:any){
    const request = new XMLHttpRequest();
    request.open("post", "http://localhost:5092/api/SubCategory/CreateSubCategory");
    request.send(model);
    return request.DONE;
    // let url="http://localhost:5092/api/SubCategory/CreateSubCategory";
    // return this.http.post<any>(url,model).pipe(
    //   // retry(3),
    //   // catchError((error)=>this.gerericService.handleError(error))
    //   );
  }
  update(id:number,model:any){
    const request = new XMLHttpRequest();
    request.open("put", "http://localhost:5092/api/SubCategory/updateSubcategory?Id="+id);
    request.send(model);
    return request.DONE;
    // let url="http://localhost:5092/api/SubCategory/updateSubcategory?Id="+id;
    // return this.http.put(url,model).pipe(
    //   retry(3),
    //   );
  }
  
  delete(id:number){
    let url="http://localhost:5092/api/SubCategory/DeleteSubCategory?Id="+id;
    return this.http.delete(url).pipe(
      retry(3)
      );

  }
  getAll():Observable<ISubCategoryResponse>{
    let url="http://localhost:5092/api/SubCategory/getAllSubcategory";
    return this.http.get<ISubCategoryResponse>(url).pipe(
      retry(3),
      );
  }
  
  getById(id:number):Observable<ISubCategoryResponse>{
    let url="http://localhost:5092/api/SubCategory/GetsubCategoryByID/"+id;
    return this.http.get<ISubCategoryResponse>(url).pipe(
      retry(3),
      );
  }
  getByCategoryId(id:number):Observable<ISubCategoryResponse>{
    let url="http://localhost:5092/api/SubCategory/SubCategorysByCategoryID/"+id;
    return this.http.get<ISubCategoryResponse>(url).pipe(
      retry(3),
      );
  }

}
