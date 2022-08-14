import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './Services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  constructor(private loginservice:LoginServiceService)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginservice.Role.includes(route.data['role']);
  }
  
}
