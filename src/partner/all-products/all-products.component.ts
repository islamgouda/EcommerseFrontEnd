import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { INewCategoryResponse, IProductResponse, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ISubCategory } from 'src/helpers/interfaces/isub-category';
import { CategoryService } from 'src/helpers/services/category.service';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  // AllCat:any;
  // AllSubCat:any;
  // categoryId:number;
  // Product:any;
  // productList:IShowProduct[]=[];
  // subCat: { id: number, name: string }[] = [];
  // SubcategoryId:number=0;
  // constructor(private categoryService:CategoryService,private sharedService:SharedService,private http:HttpClient) { 
  //   this.categoryId=0;
  // }
  // subCategoriesList:any;
  // categoriesList:any;
  subCategoriesList:ISubCategory[]=[];
  categoriesList:ICategory[]=[];
  productList:IShowProduct[]=[];
  isButtonClicked:boolean=false;
  selectedCategoryId:number=-1;
  selectedSubCategoryId:number=-1;
  textDirection:string;
  lang:string;
  constructor(private http:HttpClient,public shared:SharedService,private router:Router,private productService:ProductService,private sharedService:SharedService,private categoryService:CategoryService,private subCatService:SubCategoryService) 
  {
    this.textDirection = this.sharedService.textDirection;
    this.lang=localStorage.getItem("lang")||"en";
   }
  ngOnInit(): void {
    this.getAllCategories();
  }
  // getAllCategories(){
  //   this.categoryService.getAllCategoriesWithSubCategories().subscribe(
  //     (data)=>{
  //       console.log(data.data);
  //       this.AllCat = data.data as INewCategoryResponse[];
  //     },
  //     (error)=>{
  //       this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
  //     }
  //   )
  // }
 

//   GetAllSubCategorys()
// {
//   this.http.get('http://localhost:5092/api/SubCategory/SubCategorysByCategoryID/'+this.categoryId).subscribe(
    
//       data=>{
//        this.AllSubCat=data;
//        this.subCat=this.AllSubCat.data;
//        console.log(this.subCat);
//       }
    
//   )
// }
  // getAllCategories(){
  //   this.categoryService.getAllCategoriesWithSubCategories().subscribe(
  //     (data)=>{
  //       console.log(data.data);
  //       this.categoriesList = data.data as INewCategoryResponse[];
  //     },
  //     (error)=>{
  //       this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
  //     }
  //   )
  // }
 
// GetAllSubCategorys()
// {
//   this.http.get('http://localhost:5092/api/SubCategory/SubCategorysByCategoryID/'+this.selectedCategoryId).subscribe(
    
//       data=>{
//        this.subCategoriesList=data;
//        this.subCategoriesList=this.subCategoriesList.data;
//       //  console.log(this.subCat);
//       }
    
//   )
// }
getAllCategories(){
  this.categoryService.getAllCategoriesWithSubCategories().subscribe(
    (data)=>{
      console.log("data.data_+_+_+_+_+_+"+data.data);
      this.categoriesList = data.data as INewCategoryResponse[];
      console.log("________cats______________"+this.categoriesList);
    },
    (error)=>{
      this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
    }
  )
}
GetAllProducts()
{
  this.http.get<IProductResponse>('http://localhost:5092/api/Product/PartnerProductsBySubCategory/'+this.selectedCategoryId).subscribe(
    data=>{
      console.log(data);
      this.productList = data.data as IShowProduct[];
      console.log(this.productList);

    }
  )
}

getproductsBySubCategoryId()
{
  this.http.get<IProductResponse>('http://localhost:5092/api/Product/PartnerProductsBySubCategory/'+this.selectedSubCategoryId).subscribe(
    data=>{
      console.log(data);
      this.productList = data.data as IShowProduct[];
      console.log(this.productList);

    }
  )
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
changeCategory(){
  this.selectedSubCategoryId=-1;
  this.getRelatedSubCategory();
  console.log("sub category list : "+this.subCategoriesList);
}
getRelatedSubCategory(){
  this.subCategoriesList=[];
  this.subCatService.getByCategoryId(this.selectedCategoryId).subscribe(
    data=>{
      this.subCategoriesList=data.data as ISubCategory[];
      console.log("+++++++++++++++++sub cat list++++++++++++++++++++++++++++++")
      console.log(this.subCategoriesList)
    }
  );
}
}