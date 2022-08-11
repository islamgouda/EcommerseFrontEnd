import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const lang = localStorage.getItem("lang") ||'en';
    const token =localStorage.getItem("token")||"invalid token"; 
    // request = request.clone({
    //   setHeaders :{
    //     // Authorization:token,
    //     "Accept-Language":lang,
    //   }
    // });
    request = request.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token,
        "Accept-Language":lang
      })
    });
    return next.handle(request);
  }
}
