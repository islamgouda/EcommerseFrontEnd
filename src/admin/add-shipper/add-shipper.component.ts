import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { AdminReportsService } from 'src/Services/admin-reports.service';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.scss']
})
export class AddShipperComponent implements OnInit {
  AllRequests:any;
  response:any;
  constructor(private http:HttpClient,private adminservice:AdminReportsService) { }

  ngOnInit(): void {
    this.adminservice.GetAllShipperRequests().subscribe(
      data=>{
        this.AllRequests=data.data;
        console.log(data)
      }
    )
  }
  AddShipper(id:any)
  {
   console.log(id);
   this.adminservice.AddshipperbyRequest(id).subscribe(
    (data)=>{
    console.log(data);
    alert("Added Successully")
    location.reload();
    },
   (error)=>{
    console.log("Error");
  }
   )
  }

}
