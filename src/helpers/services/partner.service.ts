import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IPartner } from '../interfaces/ipartner';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  partnerApi:string = "http://localhost:3000/partners";
  constructor(private httpClient:HttpClient,private gerericService:GenericApiHandlerService) {
    
   }

   addNewPartner(model:IPartner):Observable<IPartner>
   {
    return this.httpClient.post<IPartner>(this.partnerApi,model,this.gerericService.httpOptions)
    .pipe(catchError(error=>this.gerericService.handleError(error)));
   }
   getAllPartners():Observable<IPartner[]>
   {
    return this.httpClient.get<IPartner[]>(this.partnerApi,this.gerericService.httpOptions).
           pipe(
            catchError(error=>this.gerericService.handleError(error))
           );
   }
   detelePartner(id:number):Observable<boolean>
   {
     return this.httpClient.delete<boolean>(`${this.partnerApi}/${id}`).pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
   }
   getPartnerById(id:number):Observable<IPartner>{
    return this.httpClient.get<IPartner>(this.partnerApi+"/"+id)
    .    pipe(retry(3),catchError((error)=>this.gerericService.handleError(error)));
  } 
  updatePartner(id:number,model:IPartner):Observable<boolean>
  {
    return this.httpClient.put<boolean>(`${this.partnerApi}/${id}`,model,this.gerericService.httpOptions).pipe(
      catchError(error=>this.gerericService.handleError(error))
    );
  }

}
