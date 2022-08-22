import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ipartner } from 'src/helpers/interfaces/iPartner2';

@Component({
  selector: 'app-bea-partner',
  templateUrl: './bea-partner.component.html',
  styleUrls: ['./bea-partner.component.scss']
})
export class BeaPartnerComponent implements OnInit {
  partner:Ipartner ={name:"", numberOfBranches:0};
  responsedata:any;
  ResponseMessage:string="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  RequestPartnership()
  {
   this.http.post<Ipartner>("http://localhost:5092/api/RequestTobeAPartner/BePartner",this.partner).subscribe(data=>{
   this.responsedata=data; 
   console.log(data);
   });
   
   
  }

}
