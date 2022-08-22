import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { INewCategoryResponse } from 'src/helpers/interfaces/iproduct';
import { CategoryService } from 'src/helpers/services/category.service';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-products-by-product-name',
  templateUrl: './products-by-product-name.component.html',
  styleUrls: ['./products-by-product-name.component.scss']
})
export class ProductsByProductNameComponent implements OnInit {

  productList:any[]=[];
  productName:string;
  categoryName:string="";
  lang:string;
  categoriesList:ICategory[]=[];
  constructor(public shared:SharedService,private router:Router,private sharedService:SharedService,private categoryService:CategoryService,private productService:ProductService) {
    this.productName = "";
    this.lang=localStorage.getItem("lang")||"en";
   }
  
  ngOnInit(): void {
    this.getAllCategories();
  }
  serverErrorMessage:string="";
  getAllCategories(){
    this.categoryService.getAllCategoriesWithSubCategories().subscribe(
      (data)=>{
        console.log(data.data);
        this.categoriesList = data.data as INewCategoryResponse[];
      },
      (error)=>{
        this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
      }
    )
  }
  
  
  getproductsByProductName(){
    this.productList=[];
    if(this.productName.length>0){
    this.productService.getProductsByArabicName(this.productName).subscribe(
      data=>{
        console.log("----------data---------------");
        console.log(data);
        this.productList = data.data as any[];
        console.log("----------cat List---------------");
        console.log(this.productList);
      }
    );
    if(this.productList.length<1){
    this.productService.getProductsByEnglishName(this.productName).subscribe(
      data=>{
        console.log("----------data---------------");
        console.log(data);
        this.productList = data.data as any[];
        console.log("----------cat List---------------");
        console.log(this.productList);
      }
    );
  }
  }
  }
  getDiscount(price:number,discount:number){
    return price*discount;
  }
  buy(id:number){
    let url = "/home/addToCart/";
    if(localStorage.getItem('token')==null){
      this.router.navigate(['/LoginUser']);
    }else{
      this.router.navigate([url,id]);
    }
  }
  goDetails(id:number){
   let url="/home/productDetails/";
   this.router.navigate([url,id]);
  }


}
