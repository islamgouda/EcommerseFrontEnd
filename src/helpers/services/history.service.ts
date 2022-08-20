import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IUserOrderHistory } from '../interfaces/ihistory';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http:HttpClient) { }

  getOrderHistory():Observable<IUserOrderHistory>{
    let url = "http://localhost:5092/api/Orders/GetAll";
    return this.http.get<IUserOrderHistory>(url).pipe(
      retry(3),
    );
  }

}
