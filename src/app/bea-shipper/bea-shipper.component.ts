import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bea-shipper',
  templateUrl: './bea-shipper.component.html',
  styleUrls: ['./bea-shipper.component.scss']
})
export class BeaShipperComponent implements OnInit {

  constructor(private http:HttpClient) { }
  name:string="";
  arabicName:string="";
  officePhone:string="";
  responseMessage:any;
  ngOnInit(): void {
  }
  createRequest()
  {
    let body={name:this.name,arabicName:this.arabicName,officePhone:this.officePhone}
    this.http.post('http://localhost:5092/api/Shipper/IamShipper',body).subscribe(
      data=>{
        this. responseMessage=data;
        console.log(this.responseMessage);
      }
    )
  }

}
