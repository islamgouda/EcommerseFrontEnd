import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShipper } from 'src/helpers/interfaces/ishipping-details';
import { SharedService } from 'src/helpers/services/shared.service';
import { ShippingService } from 'src/helpers/services/shipping.service';


@Component({
  selector: 'app-shipper-update-state',
  templateUrl: './shipper-update-state.component.html',
  styleUrls: ['./shipper-update-state.component.scss']
})
export class ShipperUpdateStateComponent implements OnInit,AfterViewInit {
  shippingModel:IShipper={alLaddress:"",alLaddress_Ar:"",arabicshippingstate:"",customerPhone:"",shipName:""};
  shippingId:number=-1;
  lang:string;
  pickUp:boolean;
  onProcess:boolean;
  onDelivery:boolean;
  Delivered:boolean;
  constructor(private shared:SharedService,private location:Location,private activatedRoute:ActivatedRoute,private shippingService:ShippingService) {
    this.lang=localStorage.getItem("lang")||'en';
    this.pickUp = true;
    this.onProcess = true;
    this.onDelivery = true;
    this.Delivered = true;
   }

  ngOnInit(): void {
    this.shippingId = this.getUrlParameter("id");
    this.getSelectedshipping();
    // this.setSates();
  }
  ngAfterViewInit(): void {
    this.setSates();
    console.log("--------- States ----------------");
    console.log(this.pickUp);
    console.log(this.onProcess);
    console.log(this.onDelivery);
    console.log(this.Delivered);
  }

  back(){
    this.location.back();
  }
  getUrlParameter(paramName:string):number{
    let parameter = -1;
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        parameter = Number(params.get(paramName));
      }
    )
    return parameter;
  }
  getSelectedshipping(){
    this.shippingService.getShippingById(this.shippingId).subscribe(
      data=>{
        this.shippingModel = data.data;
        this.shippingModel.shippingstate = data.data.shippingstate;
        this.setSates();
      }
    )
    this.setSates();
  }
  changeState(state:string){
    let msg=this.lang=='en'?"State Changed Successfully !":"تم تغيير الحالة بنجاح";
    let warningMsg=this.lang=='en'?"Change States In Order Please !":"قم بتغيير الحالة بالترتيب !";
    this.getSelectedshipping();
    if(state=="Pick-up"){
      // if(this.shippingModel.shippingstate!="Pick-up"){
      //   this.shared.showSnackBar(warningMsg,5000,'warningSnackBar');
      // }
      // else
      this.shippingService.changeStateToOnProcess(this.shippingId).subscribe(
        data=>{
          if(data.success){
            this.shared.showSnackBar(msg,5000,'successSnackBar');
          }
        }
      );
      
    }else if(state=="on-process"){
      // if(this.shippingModel.shippingstate!="on-process"){
      //   this.shared.showSnackBar(warningMsg,5000,'warningSnackBar');
      // }
      // else
      this.shippingService.changeStateToOnDelivery(this.shippingId).subscribe(
        data=>{
          if(data.success){
            this.shared.showSnackBar(msg,5000,'successSnackBar');
          }
        }
      );
    }else if(state=="on-delivery"){
      // if(this.shippingModel.shippingstate!="on-delivery"){
      //   this.shared.showSnackBar(warningMsg,5000,'warningSnackBar');
      // }
      // else
      this.shippingService.changeStateToDelivered(this.shippingId).subscribe(
        data=>{
          if(data.success){
            this.shared.showSnackBar(msg,5000,'successSnackBar');
          }
        }
      );
    }else{
      this.shared.showSnackBar("Warning : Unable To Change State !",4000,'dangerSnackBar');
    }
    this.getSelectedshipping();
    this.setSates();
  }

  setSates(){
    let state = this.shippingModel.shippingstate;
    if(state=="Pick-up"){
      this.pickUp = true;
      this.onProcess = false;
      this.onDelivery = true;
      this.Delivered =true;
    }else if(state=="on-process"){
      this.pickUp = true;
      this.onProcess = true;
      this.onDelivery = false;
      this.Delivered =true;
    }else if(state=="on-delivery"){
      this.pickUp = true;
      this.onProcess = true;
      this.onDelivery = true;
      this.Delivered =false;
    }else if(state=="Delivered"){
      this.pickUp = true;
      this.onProcess = true;
      this.onDelivery = true;
      this.Delivered =true;
    }else{

    }
  }


}
