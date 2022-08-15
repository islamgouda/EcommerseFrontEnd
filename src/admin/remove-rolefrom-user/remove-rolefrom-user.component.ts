import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-rolefrom-user',
  templateUrl: './remove-rolefrom-user.component.html',
  styleUrls: ['./remove-rolefrom-user.component.scss']
})
export class RemoveRolefromUserComponent implements OnInit {
  ResponseData:any;
  Responsemessage:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:5092/api/Admin/GetAllUsersAssignedToRoles").subscribe(
      (data)=>{this.ResponseData=data
      console.log(this.ResponseData);}
    );
  }
  RemoveFromRole(id:string,role:string)
  {
    let body={id,role};
    this.http.post('http://localhost:5092/api/Admin/RemoveUserFromrole',body).subscribe(
     data=>{this.Responsemessage=data;
     alert(this.Responsemessage.message)
     location.reload();
    }
    );
  }
}
