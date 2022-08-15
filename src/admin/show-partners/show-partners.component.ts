import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminReportsService } from 'src/Services/admin-reports.service';

@Component({
  selector: 'app-show-partners',
  templateUrl: './show-partners.component.html',
  styleUrls: ['./show-partners.component.scss']
})
export class ShowPartnersComponent implements OnInit {
   responsedata:any;
  constructor(private http:HttpClient,private AdminReports:AdminReportsService) { }

  ngOnInit(): void {
    this.AdminReports.GetPartners().subscribe(data=>{
    this.responsedata=data;  
    console.log(data); 
    
    });


    
  }


}
