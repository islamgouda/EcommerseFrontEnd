
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { INewCategoryResponse, INewSubCategoryResponse, IProduct, IProductResponse, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ISubCategory } from 'src/helpers/interfaces/isub-category';

import { CategoryService } from 'src/helpers/services/category.service';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  ProductId:number=0;
  productModel:IShowProduct={categoryName:"",description:"",description_Ar:"",discount:0,images:[],isAvailable:true,name:"",
  name_Ar:"",partenerName:"",price:0,quantity:0,subcategoryName:"",id:-1};
  response:any;
  textDirection:string;
  lang:string;
  imageLength:number;
  counter:number = 0;
 constructor(private location:Location,public shared:SharedService,private http:HttpClient,private activatedRoute:ActivatedRoute)
 {
   this.lang =localStorage.getItem("lang")||"en";
   this.textDirection = this.lang=="en"?"ltr":"rtl";
   this.imageLength = this.productModel.images.length;
 }
 ngOnInit(): void {
  //  
  this.ProductId=this.getUrlParameter("id");
  this.getProduct()
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
  getProduct()
  {
    this.http.get<IProductResponse>('http://localhost:5092/api/Product/getmyproductbyID?productID='+this.ProductId).subscribe(
      data=>{
       this.response=data;
       this.productModel=this.response.data;
      }
    )
  }
  Confirm()
  {
    this.http.delete('http://localhost:5092/api/Product/DeleteProductById/'+this.ProductId).subscribe(
      data=>{
        console.log(data);
        let msg = this.lang=="en"?"Product Deleted Successfully":"تم ازالة المنتج";
        this.shared.showSnackBar(msg,5000,'successSnackBar');
         this.back();
      }
    )
  }
  back(){
   this.location.back();
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
 
}

