import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/helpers/interfaces/UserLogin';
import { UserModel } from 'src/helpers/interfaces/UserModel';
import { LoginServiceService } from 'src/Services/login-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  UserName:string="";
  UserId:string="";
  Role:any;
  url:string='http://localhost:5092/api/Authentication/login';
  responseData:any;
  userlogin:UserLogin={email:"",password:""};

  // constructor(private http:HttpClient,private router:Router) { }

  constructor(private http:HttpClient,private router:Router
        ,private lservice:LoginServiceService
                ,private fb:FormBuilder,private location:Location) { }

//new update by ataa

  loginForm = this.fb.group(
    {
      email:['',[Validators.required,Validators.
      pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',Validators.required],

   }

  );

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
        if(this.responseData!=null)
         {
         this.router.navigate(['']).then(()=>{
          window.location.reload();

         }) //Amr edit
         }
      
    }},
    (error)=>console.log(error)
    );
    this.back();
  }
    back(){
      this.location.back();
    }
    //this.user=this.getMe();
closeAlert(){
  this.alert=false;
}
//////////////Amr method to get userdata
   getme() {
     this.lservice.getMe().subscribe((name) => {
       this.UserName=name.userName;
       this.UserId=name.userId;
       this.Role=name.roles;
       console.log(this.Role.includes('Admin')); //false or true
       console.log(name); //user
     });
 }
}