import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-role-to-user',
  templateUrl: './add-role-to-user.component.html',
  styleUrls: ['./add-role-to-user.component.scss']
})
export class AddRoleToUserComponent implements OnInit {
  Email:string;
  RoleName:string;
  ResponseMessage:any;
  Assignform: FormGroup;
 
  constructor(private http:HttpClient ,private fb:FormBuilder) { 
    this.Email="";
    this.RoleName="";
    this.Assignform=this.fb.group(
      {
        email:['',Validators.required],
        roleName:['',Validators.required]
      }
    )
  }
 
 
  ngOnInit(): void {
  
  }
  assign()
  {
    let body={email:this.Assignform.get('email')?.value,rolename:this.Assignform.get('roleName')?.value}
    console.log(body);
    this.http.post('http://localhost:5092/api/Admin/AddRoleToUser',body).subscribe(
      (data)=>{
        console.log(data);
        this.ResponseMessage=data;
      
      }
    )
  }

}
