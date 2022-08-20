import { Component, OnInit } from '@angular/core';
import { IShipping } from 'src/helpers/interfaces/ishipping-details';
import { ShippingService } from 'src/helpers/services/shipping.service';

@Component({
  selector: 'app-user-shipping',
  templateUrl: './user-shipping.component.html',
  styleUrls: ['./user-shipping.component.scss']
})

export class UserShippingComponent implements OnInit {
  shippingList:IShipping[]=[];
  pickUp="";
  onProcess="";
  onDelivery="";
  delivered="";
  constructor(private shippingService:ShippingService) {
    this.pickUp="Pick Up",
    this.onProcess="on-process",
    this.onDelivery="on-delivery",
    this.delivered="Delivered"
   }

  ngOnInit(): void {
    this.getAllShipping();
  }
  getAllShipping(){
    this.shippingService.getAllShipping().subscribe(
      data=>{
        if(data.success){
          this.shippingList =data.data;
        } 
      }
    );
  }

}
