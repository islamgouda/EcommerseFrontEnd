import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAddress, IBuy, IShipper } from 'src/helpers/interfaces/icheckout';
import { IPaymentMethod } from 'src/helpers/interfaces/ipayment-method';
import { CheckOutService } from 'src/helpers/services/check-out.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-proceed-to-pay',
  templateUrl: './proceed-to-pay.component.html',
  styleUrls: ['./proceed-to-pay.component.scss']
})
export class ProceedToPayComponent implements OnInit,AfterViewInit {
  shipperId:number=-1;
  shipperList:IShipper[]=[];
  addressId:number=-1;
  addressList:IAddress[]=[];
  paymentMethodId:number=-1;
  paymentMethodList:IPaymentMethod[]=[];
  payModel:IBuy={addressID:-1,shipperID:-1,paymentID:-1};
  constructor(private checkoutServices:CheckOutService,private shared:SharedService,private router:Router,private sharedService:SharedService) { }

  ngOnInit(): void {
    this.getShippers();
    this.getAddresses();
    this.getAllPaymentMethods();
  }
  ngAfterViewInit(): void {
    this.ngOnInit();
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
  getAllPaymentMethods(){
    this.checkoutServices.getAllPaymentMethods().subscribe(
      data=>{
        console.log("------------data-------------------");
        console.log(data);
        console.log("--------------------");
        if(data.succcess){
          this.paymentMethodList = data.data as IPaymentMethod[];
        }
      }
    );
  }
  

  
  goToAddPaymentMethod(){
    let isLogged = (localStorage.getItem('token')===null)?false:true;
    if(isLogged){
      this.router.navigate(["/home/addPayemntMethod"]);
    }else{
      this.router.navigate(["/LoginUser"]);
    }
  }
  goToAddAddress(){
    let isLogged = (localStorage.getItem('token')===null)?false:true;
    if(isLogged){
      this.router.navigate(["/home/addAddress"]);
    }else{
      this.router.navigate(["/LoginUser"]);
    }
  }
  confirmPayment(){
    console.log("----------------inserted data---------------------");
    
    
    // this.payModel={addressID:9,shipperID:1,paymentID:5};
    console.log(this.payModel);
     this.checkoutServices.confirmBuy(this.payModel).subscribe(
      (data)=>{
        console.log("##Data : "+data);
        if(data.success){
        let language=localStorage.getItem("lang");
        let successMessage ='';
        successMessage = language=="en"?"Buy Operation Completed Successfully, Track Your Order":
        "تم تأكيد عملية الشراء بنجاح , تابع تحركات طلبك";
        this.sharedService.showSnackBar(successMessage,6000,'successSnackBar');
        console.log("---------------start Proceed To Pay----------------------------")
        console.log(data.message);
        console.log(data.success);
        console.log(data.data);
        console.log("---------------End Proceed To Pay----------------------------")
        this.router.navigate(["/home"]);//go home
      }else{
        this.sharedService.showSnackBar(data.message,4000,'dangerSnackBar');
      }
    }
    // ,(error)=>{
    //     console.log("##Error : "+error);
    //     if(error=="")
    //     error = "Can not Compelte pay , try againg !"
    //     this.sharedService.showSnackBar(error.message,3000,'dangerSnackBar');
    //   }
     );
  }
}
