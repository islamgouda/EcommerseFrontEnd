import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-u-product-details',
  templateUrl: './u-product-details.component.html',
  styleUrls: ['./u-product-details.component.scss']
})
export class UProductDetailsComponent implements OnInit {

  productId:number=-1;
  lang:string;
  productModel:IShowProduct={categoryName:"",description:"",description_Ar:"",discount:0,images:[],isAvailable:true,name:"",
                             name_Ar:"",partenerName:"",price:0,quantity:0,subcategoryName:"",id:-1};
  imageLength:number;
  counter:number = 0;
 
  textDirection:string;
  constructor(private router:Router,private translateservice:TranslateService,private location:Location,private activatedRoute:ActivatedRoute,public shared:SharedService,private productService:ProductService) { 
  this.lang = localStorage.getItem("lang")||"en";
  this.imageLength = this.productModel.images.length;
  this.translateservice.setDefaultLang("en");
    this.translateservice.use(localStorage.getItem('lang')||'en');
  
    this.textDirection=this.lang=='en'?"ltr":"rtl";
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
  buyNow(id:number){
    if(localStorage.getItem('token')){
      let url="/home/addToCart/";
      this.router.navigate([url,id]);
    }else{
      let url="/LoginUser";
      this.router.navigate([url]);
    }
   
  }
  back(){
    this.location.back();
  }


}
