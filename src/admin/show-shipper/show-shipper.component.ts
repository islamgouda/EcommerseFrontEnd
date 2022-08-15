import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminReportsService } from 'src/Services/admin-reports.service';

@Component({
  selector: 'app-show-shipper',
  templateUrl: './show-shipper.component.html',
  styleUrls: ['./show-shipper.component.scss']
})
export class ShowShipperComponent implements OnInit {
  responsedata:any;
  constructor(private http:HttpClient,private adminservice:AdminReportsService) { }

  ngOnInit(): void {
  this.adminservice.ShowAllShippers().subscribe(
    data=>{
      this.responsedata=data;
    }
  );
  }


}
