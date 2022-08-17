import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDisplayProducts } from 'src/helpers/interfaces/idisplay-products';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  textDirection:string="";
  productModel:IDisplayProducts={name:"",description:"",nameAr:"",descriptionAr:"",category:"",subCategory:"",discountValue:"",haveDiscount:false,images:null,isAvailable:false,price:"",quantity:"",partner:""};
  errorMessage:string="";
  productName:string="";
  productID:number=-1;

  // discountActivestatus:string="";
  // activeStatuscolor:string = "indigo"
  // isEnglishLang:boolean;
  constructor(private activatedRoute:ActivatedRoute,private location:Location,private productService:ProductService,private sharedservice:SharedService) {
    this.textDirection = this.sharedservice.textDirection;
    // this.isEnglishLang=this.textDirection=='ltr'?true:false;
   }


  ngOnInit(): void {
    this.productID = this.getUrlParameter("id");
    this.getSelectedProduct();
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
   getSelectedProduct(){
    // this.productService.getProductInDetailsById(this.productID).subscribe(
    //   (data)=>{
    //     this.productModel = data;
    //     this.productName = this.textDirection=='rtl'?data.nameAr:data.name;
    //   },
    //   (error)=>this.errorMessage = error
    // )
   }
  confirmDeleteProduct(){
    let deleteSuccessMessage = this.textDirection=="ltr"?"Deleted Done Successfully !":"تمت عملية الحذف بنجاج";
    let deleteFailerMessage = this.textDirection=="ltr"?"Can not Delete Sub Category !":"لم تتم عملية الحذف ";
    // this.productService.deleteProduct(this.productID).subscribe(
    //  (res)=>{
    //   if(res){
    //     this.sharedservice.showSnackBar(deleteSuccessMessage,4000,'successSnackBar');
    //   }else{
    //     this.sharedservice.showSnackBar(deleteSuccessMessage,4000,'dangerSnackBar');
    //   }
    //  },
    //  (error)=>this.sharedservice.showSnackBar(error,4000,'dangerSnackBar')
    // )
    // this.location.back();
  }
//   activeStatusTransform(isActive:boolean){
//     if(isActive){
//      this.activeStatuscolor = "#005221"
//      if(this.isEnglishLang){
//        return "This Discount is Active";
//      }else{
//        return "هذا الخصم مفعل";
//      }
//     }else{
//      this.activeStatuscolor = "#8a0000"
//      if(this.isEnglishLang){
//        return "This Discount is Inactive";
//      }else{
//        return "هذا الخصم غير مفعل"
//      }
//     }
//  }

  back(){
    this.location.back();
  }


}
