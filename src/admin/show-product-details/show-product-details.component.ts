import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.scss']
})
export class ShowProductDetailsComponent implements OnInit {
  productId:number=-1;
  lang:string;
  productModel:IShowProduct={categoryName:"",description:"",description_Ar:"",discount:0,images:[],isAvailable:true,name:"",
                             name_Ar:"",partenerName:"",price:0,quantity:0,subcategoryName:"",id:-1};
  imageLength:number;
  counter:number = 0;
  constructor(private location:Location,private activatedRoute:ActivatedRoute,private shared:SharedService,private productService:ProductService) { 
  this.lang = localStorage.getItem("lang")||"en";
  this.imageLength = this.productModel.images.length;
  }

  ngOnInit(): void {
    this.productId = this.getUrlParameter("id");
    this.getSelectedProduct();
  }
  getNext(){
    this.counter++;
    this.imageLength = this.productModel.images.length;
    if(this.counter > this.imageLength-1){
      this.counter=0;
    }
    console.log("image length  " + this.imageLength);
    console.log("Counter " + this.counter);
  }
  getPervious(){
    this.imageLength = this.productModel.images.length;
    this.counter--;
    if(this.counter<=0){
      this.counter = 0;
    }

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
    this.productService.getAnyProductById(this.productId).subscribe(
      data=>{
        this.productModel = data.data;
      }
    );
  }
  signAsApproved(){
    let successMsg=this.lang=="en"?"Product Signed As Approved Suucessfully":"تم تعليم المنتج كـــ مقبــول";
    this.productService.signAsApproved(this.productId).subscribe(
      data=>{
        if(data.success){
        this.shared.showSnackBar(successMsg,5000,'successSnackBar');
        }
      }
    );
  }
  back(){
    this.location.back();
  }

}
