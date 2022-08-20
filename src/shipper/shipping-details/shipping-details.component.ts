import { Component, OnInit } from '@angular/core';
import { IShipper } from 'src/helpers/interfaces/ishipping-details';
import { ShippingService } from 'src/helpers/services/shipping.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {

  textDirection:string;
  lang:string;
  shippingList:IShipper[]=[];
  constructor(private shippingService:ShippingService) { 
    this.lang = localStorage.getItem('lang')||"en";
    this.textDirection=this.lang=='en'?"ltr":"rtl";
  }

  ngOnInit(): void {
    this.getAllShippings();
  }
  getAllShippings(){
    this.shippingService.getAllShippingDetails().subscribe(
      data=>{
        this.shippingList = data.data;
      }
    );
  }

}
