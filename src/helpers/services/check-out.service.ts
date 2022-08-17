import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  constructor(private http:HttpClient,private genericService:GenericApiHandlerService) { }
  getAllShipper(){
    
  }  

}
