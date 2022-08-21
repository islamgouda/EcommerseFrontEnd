import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAssignDiscountFormModel } from 'src/helpers/interfaces/iassign-discount-form-model';
import { IAssignDisountToProduct } from 'src/helpers/interfaces/iassign-disount-to-product';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { IDiscount } from 'src/helpers/interfaces/idiscount';
import { IDisplayProducts } from 'src/helpers/interfaces/idisplay-products';
import { INewCategoryResponse, IProduct, IProductResponse, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ISubCategory } from 'src/helpers/interfaces/isub-category';
import { AssignDisountToProductService } from 'src/helpers/services/assign-disount-to-product.service';
import { CategoryService } from 'src/helpers/services/category.service';
import { DiscountService } from 'src/helpers/services/discount.service';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';

@Component({
  selector: 'app-assign-disount-to-product',
  templateUrl: './assign-disount-to-product.component.html',
  styleUrls: ['./assign-disount-to-product.component.scss']
})
export class AssignDisountToProductComponent implements OnInit {

   textDirection:string;
   subCategories:ISubCategory[]=[]
   categories:ICategory[]=[];
   products:any;
   discounts:IDiscount[]=[];
   model: IAssignDiscountFormModel = {productId: -1,categoryId: -1,subCategoryId: -1,discountId: -1};
   errorMessage:string="";
   goToAddProductsFirst:string="";
   isSubCatSelectOptionHidden:boolean=true;
  isProductSelectOptionHidden:boolean=true;
   noDataRelated:string="No Related Sub Categories!"
   constructor(private location:Location,private activatedRoute:ActivatedRoute,
     private sharedService:SharedService, private router:Router,private http:HttpClient,
     private productService:ProductService,
     private categoryService:CategoryService,
     private subCategoryService:SubCategoryService,
     private assignDiscount:AssignDisountToProductService,
     private discountService:DiscountService) { 
     this.textDirection = this.sharedService.textDirection;
    this.goToAddProductsFirst = this.textDirection=="ltr"?"No Products Exists ,Go To add At Least one":
     "لا يوجد منتجات اذهب لاضافة منتج واحد على الاقل";
   }

   ngOnInit(): void {
     this.getAllCategories();
     this.getdiscounts();
   }
 
  getAllCategories(){
    this.categoryService.getAllCategoriesWithSubCategories().subscribe(
      (data)=>{
        console.log(data.data);
        this.categories = data.data as INewCategoryResponse[];
      },
      (error)=>{
        this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
      }
    )
  }
   getdiscounts(){
     this.discountService.getAllDiscounts().subscribe(
       data=>this.discounts = data.data as IDiscount[],
     );
   }
  onChangeCategory(){
    console.log("-------------------cat ID--------------------------")
    console.log(this.model.categoryId)
    this.subCategoryService.getByCategoryId(this.model.categoryId).subscribe(
     data=>{
       this.subCategories = data.data as ISubCategory[];
       console.log("SubCats----------------------Data******************************");
      console.log(data.data);
       if(this.subCategories.length==0){
         this.noDataRelated = "No Sub Categories Related To this Category !";
         this.sharedService.showSnackBar(this.noDataRelated,4000,'warningSnackBar');
       }else{
         this.isSubCatSelectOptionHidden = false;
       }
     }
    );
 }
   onChangeSubCategory(){
    this.isProductSelectOptionHidden = false;
    this.GetAllProducts();  
  }
  GetAllProducts()
{
  this.http.get('http://localhost:5092/api/Product/PartnerProductsBySubCategory/'+this.model.subCategoryId).subscribe(
    data=>{
      console.log(data);
      this.products = data as any;
      console.log(this.products);

    }
  )
}
 
   back(){
     this.location.back();
   }
 
   assignDiscountToProd(){
     let assignModel:IAssignDisountToProduct={discountId:this.model.discountId,productID:this.model.productId,partnerID:-1};
     this.assignDiscount.assignDiscount(assignModel).subscribe(
       (data)=>{
         let language=localStorage.getItem("lang");
         let successMessage ='';
         successMessage = language=="en"?`Discount Added Successfully!`:
         `تم إضافة الخصم بنجاح !`;
         this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
         this.back();
       },
       (error)=>{
         if(error.length==0){
           error="Server error";
         }
         this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
       }
     );;
   }

}
