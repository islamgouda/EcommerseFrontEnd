import { Component, OnInit } from '@angular/core';
import { IShipper } from 'src/helpers/interfaces/icheckout';
import { CheckOutService } from 'src/helpers/services/check-out.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-proceed-to-pay',
  templateUrl: './proceed-to-pay.component.html',
  styleUrls: ['./proceed-to-pay.component.scss']
})
export class ProceedToPayComponent implements OnInit {
  addressId:number=-1;
  shipperList:IShipper[]=[];
  constructor(private checkoutServices:CheckOutService,private shared:SharedService) { }

  ngOnInit(): void {
    this.getShippers();
  }
  changeAddress(){

  }
  getShippers(){
    this.checkoutServices.getAllShipper().subscribe(
      data=>{
        this.shipperList = data.data as IShipper[];
      }
    );
  }
}
