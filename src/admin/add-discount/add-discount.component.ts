import { DatePipe, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDiscount } from 'src/helpers/interfaces/idiscount';
import { DiscountService } from 'src/helpers/services/discount.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.scss']
})
export class AddDiscountComponent implements OnInit {

  textDirection:string;
  language:string;
  // updateDiscountWithId:number = -1;
  discountModel:IDiscount={name:"",description:"",name_Ar:"",description_Ar:"",descount_Persent:"",endTime:new Date,startTime:new Date,active:true};
  discountID:number=-1;
  errorMessage:string="";
  constructor(private http:HttpClient,private location:Location,private activatedRoute:ActivatedRoute,private sharedService:SharedService, private router:Router,private discountService:DiscountService) { 
    this.textDirection = this.sharedService.textDirection;
    this.language = localStorage.getItem("lang")||"en";
    }

  ngOnInit(): void {
    this.discountID  = this.getUrlParameter("id");
    this.getSelectedDiscount();
    
  }
  
  
  addNewDiscount(){
     this.http.post("http://localhost:5092/api/Discount",this.discountModel).subscribe(
      data=>{
        console.log("-----------------data response -------------");
        console.log(data);
      }
     );
  }
  // addNewDiscount(){
  //   console.log("-------------------model-------------------------");
  //   console.log(this.discountModel);
  //   this.discountService.addNewDiscount(this.discountModel).subscribe(
  //     (data)=>{
  //       if(data.succcess){
  //       let language=localStorage.getItem("lang");
  //       let successMessage ='';
  //       successMessage = language=="en"?`Discount Added Successfully!`:
  //       `تم إضافة خصم جديد بنجاح !`;
  //       this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
  //       this.back();
  //     }
  //   },
  //     (error)=>{
  //       console.log(error);
  //       this.sharedService.showSnackBar("Error : "+error,3000,'dangerSnackBar');
  //     }
  //   );
  // }
  updateDiscount(){
    let updatedSuccessfully = this.textDirection=='rtl'?"تم تعديل الخصم بنجاح":"Discount Updated Suuccessfully !";
    let updatedFailure = this.textDirection=='rtl'?"! لم يتم تعديل الخصم":"Dicount does not Updated  !";
    this.discountService.updateDiscount(this.discountID,this.discountModel).subscribe(
      (res)=>{
        console.log(res.message)
        console.log(res.succcess)
        console.log(res.data)
        if(res){
          this.sharedService.showSnackBar(updatedSuccessfully,4000,'successSnackBar');
        }else{
          this.sharedService.showSnackBar(updatedFailure,4000,'warningSnackBar');
        }
      },
      (error)=>this.sharedService.showSnackBar(error,4000,'dangerSnackBar')
    );
  }
  saveDiscount(){
    if(this.discountID<=0){
        this.addNewDiscount();
    }else{
        this.updateDiscount();
    }
    window.location.reload();
    this.back();
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
   getSelectedDiscount(){
     this.discountService.getDiscountById(this.discountID).subscribe((data)=>{
        this.discountModel = data.data as IDiscount;
        this.discountModel.startTime=(data.data as IDiscount).startTime;
        console.log(this.discountModel.startTime)
         //this.subCategoryName = this.textDirection=='rtl'?data.nameAr:data.name;
       },
       (error)=>this.errorMessage = error
     )
   }


}
