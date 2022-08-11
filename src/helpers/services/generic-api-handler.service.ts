import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IApiResponseVM } from '../interfaces/iapi-response-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericApiHandlerService {

  httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //languages
        // Authorization: 'my-auth-token' // if u have token
      })
    };
  }
  setHeader(key:string,value:string){
    this.httpOptions.headers.set(key,value);
  }
  errorMessage:string="";
  handleError(error:HttpErrorResponse){
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          console.error("Error Event");
      } else {
          console.log(`error status : ${error.status} ${error.statusText}`);
          switch (error.status) {
              case 401:      //login
              this.errorMessage = "You Have To Be Authenticated";
                  // this.router.navigateByUrl("/login");
                  break;
              case 403:     //forbidden
              this.errorMessage = "You have To Be Authorized";
                  // this.router.navigateByUrl("/unauthorized");
                  break;
                  case 404:     //forbidden
              this.errorMessage = "URL Not Found";
                  // this.router.navigateByUrl("/unauthorized");
                  break;
                  case 503:     //forbidden
              this.errorMessage = "Internal Server Error!";
                  // this.router.navigateByUrl("/unauthorized");
                  break;
          }
      } 
  } else {
      console.error("some thing else happened, May Be Connection !");
  }
    return throwError(()=>this.errorMessage);
  }
  //make crud operation functions
  get(apiUrl:string):Observable<IApiResponseVM>{
    return this.http.get<IApiResponseVM>(apiUrl,this.httpOptions).pipe(
      retry(3),
      catchError(error=>this.handleError(error))
    );
  }
}



