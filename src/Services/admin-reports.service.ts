import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPartnerRequests } from 'src/Shared/IRequest';

@Injectable({
  providedIn: 'root'
})
export class AdminReportsService {

  constructor(private http:HttpClient) { }
  GetPartners():Observable<any>
  {
   return this.http.get('http://localhost:5092/api/Partner',{
    responseType: 'json'
  });
  }
 
  GetAllPartnersRequests():Observable<any>
  {
   return this.http.get(' http://localhost:5092/api/RequestTobeAPartner/AllPartRequest',{
    responseType: 'json'
  });
  }
  AddPartnersRequest(requestId:number):Observable<any>
  {
   return this.http.post('http://localhost:5092/api/Admin/CreatePartner',requestId);
  }

}
