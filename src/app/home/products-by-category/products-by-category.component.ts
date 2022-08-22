import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { INewCategoryResponse, IProduct, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { CategoryService } from 'src/helpers/services/category.service';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent implements OnInit {

  productList:any[]=[];
  isClicked:boolean=false;
  categoryId:number;
  categoryName:string="";
  lang:string;
  categoriesList:ICategory[]=[];
  constructor(public shared:SharedService,private router:Router,private sharedService:SharedService,private categoryService:CategoryService,private productService:ProductService) {
    this.categoryId = -1;
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
  
  
  getproductsByCategoryId(){
    this.isClicked=true;
    this.productList=[];
    this.productService.getProductsByCategoryId(this.categoryId).subscribe(
      data=>{
        console.log("----------data---------------");
        console.log(data);
        this.productList = data.data as any[];
        console.log("----------cat List---------------");
        console.log(this.productList);
      }
    );
    
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
