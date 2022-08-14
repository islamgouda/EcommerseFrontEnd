import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/helpers/interfaces/UserModel';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrl="http://localhost:5092/api/Authentication/GetLoginsData";
  user!:UserModel;
  UserName:string="";
  UserId:string="";
  Role:any;
  constructor(private http:HttpClient) {
    this.getuser();  
  }
 
  
  getMe(): Observable<any> 
  {
    return this.http.get(this.baseUrl, {
      responseType: 'json'
    });
  }
  
  getuser() {
   
    this.getMe().subscribe((name) => {
      this.UserName=name.userName;
      this.UserId=name.userId;
      this.Role=name.roles;
      //console.log(this.UserName); //false or true    
    });
  }
}
