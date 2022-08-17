import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { IProduct, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { CategoryService } from 'src/helpers/services/category.service';
import { ProductService } from 'src/helpers/services/product.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent implements OnInit {

  productList:IShowProduct[]=[];
  categoryId:number=-1;
  categoryName:string="";
  categoriesList:ICategory[]=[];
  constructor(private categoryService:CategoryService,private productService:ProductService) { }
  
  ngOnInit(): void {
    this.getallProducts();
    this.getAllCategories();
  }
  serverErrorMessage:string="";
  getAllCategories(){
    this.categoryService.getAll().subscribe(
      (data)=>{
        console.log("Data"+data);
        this.categoriesList = <ICategory[]>data;
      },
      (error)=>{
        this.serverErrorMessage ="Errors In Retrieving Data !"+error;
      }
    )
  }
  getallProducts(){
    this.productService.getProducts().subscribe(
      data=>{
        this.productList = data.data as IShowProduct[];
        
        console.log(this.productList);
      }
    );
  }
  getDiscount(price:number,discount:number){
    return price*discount;
  }
  
  // getProductsByCategory(){
  //   this.productService.getProductsByCategoryId(this.categoryId).subscribe(
  //     data=>{
  //       // this.productList=data
  //     }
  //   );
  // }
  getproductsByCategoriesBySelectUser(){
    this.productList=[];
     this.getallProducts();
     console.log("--------------- : "+this.categoryName);
    this.productList = this.productList.filter(x=>x.categoryName == this.categoryName);
    console.log("product List  : "+this.productList);
    console.log("cat name : "+this.categoryName);
    // this.productList = this.productList
  }

}
