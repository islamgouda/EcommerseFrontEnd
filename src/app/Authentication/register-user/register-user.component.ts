import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/CustomValidations/ConfirmPassword';
import { UserLogin } from 'src/helpers/interfaces/UserLogin';
import { UserRegister } from 'src/helpers/interfaces/UserRegister';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
 //New Update By Ataa

//handle Gender
handleMaleChange(evt:any) {
  var target = evt.target;
  if (target.checked) {
    this.userregister.gender = "Male";
  } 
}

handleFemaleChange(evt:any) {
  var target = evt.target;
  if (target.checked) {
    this.userregister.gender = "Female";
  }
}




  url:string='http://localhost:5092/api/Authentication/Register';
  loginUrl:string='http://localhost:5092/api/Authentication/login';

  userregister:UserRegister={username:"",email:"",password:"",confirmPassword:""
  ,firstName:"",lastName:"",phone:"",gender:"Male",birthDate:new Date()};
  responseData:any;
  userlogin:UserLogin={email:"",password:""};



  constructor(private http:HttpClient,

    private router:Router,private fb:FormBuilder,) { }

    registrationForm = this.fb.group(
      {
      username:['',[Validators.required]],
     email:['',[Validators.required,Validators.
      pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required] ,
    
    //New Added
      firstName:['',[Validators.required]],
     lastName:['',[Validators.required]],
     gender:['',[Validators.required]],
     phone:['',[Validators.required]],
     birthDate:['',[Validators.required]],

    },
      
      {validator:[ConfirmPasswordValidator]}
      
    );



  //   registrationForm=this.fb.group({
  //     username:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  //     email:['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
  //     password:['',Validators.required],
  //     confirmPassword:['',Validators.required],
  
  // })


  // {
  //   Validator:this.customValidator.passwordMatchValidator("password","confirmPassword")

  // }





  ngOnInit(): void {
  };


     
  register(){
    this.http.post<UserRegister>(this.url,this.userregister)
    .subscribe(()=>{
      this.login();
      this.router.navigate(['home']);
    },
    (error)=>console.log(error)
    );
  }


 //New Update By Ataa
  login(){
    this.userlogin.email=this.userregister.email;
    this.userlogin.password=this.userregister.password;
      
      this.http.post<UserLogin>(this.loginUrl,this.userlogin)
      .subscribe(data=> {
        this.responseData=data;
        if(data!=null){
          localStorage.setItem('token',this.responseData.token);
          localStorage.setItem('expiration',
          this.responseData.expiration);
          this.router.navigate(['home']);
        
      }},
      (error)=>console.log(error)
      );
  
  }
    



}