import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiscount } from 'src/helpers/interfaces/idiscount';
import { DiscountService } from 'src/helpers/services/discount.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-delete-discount',
  templateUrl: './delete-discount.component.html',
  styleUrls: ['./delete-discount.component.scss']
})
export class DeleteDiscountComponent implements OnInit {

  textDirection:string="";
  discountModel:IDiscount={name:"",description:"",name_Ar:"",description_Ar:"",descount_Persent:"",endTime:new Date(),startTime:new Date,active:false};
  errorMessage:string="";
  discountName:string="";
  discountID:number=-1;
  discountActivestatus:string="";
  activeStatuscolor:string = "indigo"
  isEnglishLang:boolean;
  constructor(private activatedRoute:ActivatedRoute,private location:Location,private discountService:DiscountService,private sharedservice:SharedService) {
    this.textDirection = this.sharedservice.textDirection;
    this.isEnglishLang=this.textDirection=='ltr'?true:false;
   }


  ngOnInit(): void {
    this.discountID = this.getUrlParameter("id");
    this.getSelectedDiscount();
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
   getSelectedDiscount(){
    this.discountService.getDiscountById(this.discountID).subscribe(
      (data)=>{
        this.discountModel = data.data as IDiscount;
        this.discountName = this.textDirection=='rtl'?this.discountModel.name_Ar:this.discountModel.name;
      },
      (error)=>this.errorMessage = error
    )
   }
  confirmDeleteDiscount(){
    let deleteSuccessMessage = this.textDirection=="ltr"?"Deleted Done Successfully !":"تمت عملية الحذف بنجاج";
    let deleteFailerMessage = this.textDirection=="ltr"?"Can not Delete Sub Category !":"لم تتم عملية الحذف ";
    this.discountService.deteleDiscount(this.discountID).subscribe(
     (res)=>{
      this.sharedservice.showSnackBar(deleteSuccessMessage,4000,'successSnackBar');
      // if(res.succcess){
      //   this.sharedservice.showSnackBar(deleteSuccessMessage,4000,'successSnackBar');
      // }else{
      //   this.sharedservice.showSnackBar(deleteSuccessMessage +" - "+res.message,4000,'dangerSnackBar');
      // }
     },
     (error)=>this.sharedservice.showSnackBar(deleteFailerMessage+" - "+error+" - the discount foreign Key in Product !",4000,'dangerSnackBar')
    )
    this.location.back();
  }
  activeStatusTransform(isActive:boolean){
    if(isActive){
     this.activeStatuscolor = "#005221"
     if(this.isEnglishLang){
       return "This Discount is Active";
     }else{
       return "هذا الخصم مفعل";
     }
    }else{
     this.activeStatuscolor = "#8a0000"
     if(this.isEnglishLang){
       return "This Discount is Inactive";
     }else{
       return "هذا الخصم غير مفعل"
     }
    }
 }

  back(){
    this.location.back();
  }

}
