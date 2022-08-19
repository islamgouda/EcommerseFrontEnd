import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPaymentMethod } from 'src/helpers/interfaces/ipayment-method';
import { CheckOutService } from 'src/helpers/services/check-out.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.scss']
})
export class AddPaymentMethodComponent implements OnInit {

  textDirection:string;
  language:string;
  paymentModel:IPaymentMethod={cvc:"",cardNumber:"",expMonth:"",expYear:"",holderName:"",payementType:"",provider:""};
  errorMessage:string="";
  constructor(private location:Location,private activatedRoute:ActivatedRoute,private sharedService:SharedService, private router:Router,private checkoutService:CheckOutService) { 
    this.textDirection = this.sharedService.textDirection;
    this.language = localStorage.getItem("lang")||"en";
    }

  ngOnInit(): void {
  }
 

  addNewPaymentMethod(){
    this.checkoutService.addNewPaymentMethod(this.paymentModel).subscribe(
      (data)=>{
        let language=localStorage.getItem("lang");
        let successMessage ='';
        successMessage = language=="en"?`Payment Method Added Successfully!`:
        `تم إضافة طريقة دفع جديدة بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
      },
      (error)=>{
        this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
      }
    );
    this.back();
  }
 
 
  back(){
    this.location.back();
  }
 

}
