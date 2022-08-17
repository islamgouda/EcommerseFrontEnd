import { Component, OnInit } from '@angular/core';
import { IAddress, IShipper } from 'src/helpers/interfaces/icheckout';
import { CheckOutService } from 'src/helpers/services/check-out.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-proceed-to-pay',
  templateUrl: './proceed-to-pay.component.html',
  styleUrls: ['./proceed-to-pay.component.scss']
})
export class ProceedToPayComponent implements OnInit {
  shipperId:number=-1;
  shipperList:IShipper[]=[];
  addressId:number=-1;
  addressList:IAddress[]=[];
  constructor(private checkoutServices:CheckOutService,private shared:SharedService) { }

  ngOnInit(): void {
    this.getShippers();
    this.getAddresses();
  }
  getShippers(){
    this.checkoutServices.getAllShipper().subscribe(
      data=>{
        this.shipperList = data.data as IShipper[];
      }
    );
  }
  getAddresses(){
    this.checkoutServices.getallUserAddresses().subscribe(
      data=>{
        this.addressList = data.data as IAddress[];
      }
    );
  }
}
