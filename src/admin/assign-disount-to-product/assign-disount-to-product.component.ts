import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAssignDiscountFormModel } from 'src/helpers/interfaces/iassign-discount-form-model';
import { IAssignDisountToProduct } from 'src/helpers/interfaces/iassign-disount-to-product';
import { IDiscount } from 'src/helpers/interfaces/idiscount';
import { IDisplayProducts } from 'src/helpers/interfaces/idisplay-products';
import { IProduct } from 'src/helpers/interfaces/iproduct';
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
  ngOnInit(): void {
    
  }

//   textDirection:string;
//   subCategories:ISubCategory[]=[];
//   categories:I_Category[]=[];
//   products:IProduct[]=[];
//   discounts:IDiscount[]=[];
//   model: IAssignDiscountFormModel = {productId: -1,categoryId: -1,subCategoryId: -1,discountId: -1};
//   errorMessage:string="";
//   goToAddProductsFirst:string="";
//   isSubCatSelectOptionHidden:boolean=true;
//   isProductSelectOptionHidden:boolean=true;
//   noDataRelated:string=""
//   constructor(private location:Location,private activatedRoute:ActivatedRoute,
//     private sharedService:SharedService, private router:Router,
//     private productService:ProductService,
//     private categoryService:CategoryService,
//     private subCategoryService:SubCategoryService,
//     private assignDiscount:AssignDisountToProductService,
//     private discountService:DiscountService) { 
//     this.textDirection = this.sharedService.textDirection;
//     this.goToAddProductsFirst = this.textDirection=="ltr"?"No Products Exists ,Go To add At Least one":
//     "لا يوجد منتجات اذهب لاضافة منتج واحد على الاقل";
//   }

//   ngOnInit(): void {
//     this.getCategories();
//     this.getdiscounts();
//   }
//   getCategories(){
//     this.categoryService.getCategories().subscribe(
//       data=>this.categories = data,
//     );
//   }
//   getdiscounts(){
//     this.discountService.getAllDiscounts().subscribe(
//       data=>this.discounts = data,
//     );
//   }
//   onChangeCategory(){
//      this.subCategoryService.getAllSubCategories().subscribe(
//       data=>{
//         this.subCategories = data.filter(c=>c.categoryId==this.model.categoryId);
//         if(this.subCategories.length==0){
//           this.noDataRelated = "No Sub Categories Related To this Category !";
//           this.sharedService.showSnackBar(this.noDataRelated,4000,'warningSnackBar');
//         }else{
//           this.isSubCatSelectOptionHidden = false;
//         }
//       }
//      );
//   }
//   onChangeSubCategory(){
//     this.productService.getProducts().subscribe(
//      data=>{
//        this.products = data.filter(c=>c.subCategoryID==this.model.subCategoryId);
//        if(this.products.length==0){
//          this.noDataRelated = "No Products Related To this Category !";
//          this.sharedService.showSnackBar(this.noDataRelated,4000,'warningSnackBar');
//        }else{
//          this.isProductSelectOptionHidden = false;
//        }
//      }
//     );
//  }
 
//   back(){
//     this.location.back();
//   }
 
//   assignDiscountToProd(){
//     let assignModel:IAssignDisountToProduct={discountId:this.model.discountId,productID:this.model.productId,partnerID:-1};
//     this.assignDiscount.assignDiscount(assignModel).subscribe(
//       (data)=>{
//         let language=localStorage.getItem("lang");
//         let successMessage ='';
//         successMessage = language=="en"?`Discount Added Successfully!`:
//         `تم إضافة الخصم بنجاح !`;
//         this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
//         this.router.navigate(["/admin/adminLayout/showProducts"]);
//       },
//       (error)=>{
//         if(error.length==0){
//           error="Server error";
//         }
//         this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
//       }
//     );;
//   }

}
