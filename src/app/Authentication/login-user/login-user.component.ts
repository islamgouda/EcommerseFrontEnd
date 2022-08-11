import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/helpers/interfaces/UserLogin';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  url:string='http://localhost:5092/api/Authentication/login';
  responseData:any;
  userlogin:UserLogin={email:"",password:""};
  constructor(private http:HttpClient,private router:Router) { }
alert:boolean=false;
  ngOnInit(): void {
  }


  



  


  login(){
    this.http.post<UserLogin>(this.url,this.userlogin)
    .subscribe(data=> {
      this.responseData=data;
      if(data!=null){
        localStorage.setItem('token',this.responseData.token);
        localStorage.setItem('expiration',this.responseData.expiration);
        this.alert=true;
        //this.router.navigate(['discounts']);
      
    }},
    (error)=>console.log(error)
    );}
    
    
closeAlert(){
  this.alert=false;
}


   }
