import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/helpers/interfaces/iproduct';
import { ISubCategory } from 'src/helpers/interfaces/isub-category';
import { CategoryService } from 'src/helpers/services/category.service';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  textDirection:string;
  language:string;
  updateProductWithId:number=-1;
  productModel:IProduct={name:"",description:"",nameAr:"",descriptionAr:"",CategoryID:null,discountID:null,quantity:"",isAvailable:true,partnerID:null,price:"",subCategoryID:-1,images:[]};
  allProducts:IProduct[]=[];
  // allCategories:ICategory[]=[];
  allSubCategories:ISubCategory[]=[];
  ProductId:number=-1;
  errorMessage:string="";
  // goToAddCategoriesFirst:string=""
  goToAddSubCategoriesFirst:string=""
  constructor(private location:Location,private activatedRoute:ActivatedRoute,
    private sharedService:SharedService, private router:Router,
    private productService:ProductService,
    private categoryService:CategoryService,private subCatService:SubCategoryService,private subCategoryService:SubCategoryService) { 
    this.textDirection = this.sharedService.textDirection;
    this.language = localStorage.getItem("lang")||"en";
    // this.goToAddCategoriesFirst = this.textDirection=="ltr"?"No Categories Exists ,Go To add At Least one":
    // "لا يوجد اصناف اذهب لاضافة صنف واحد على الاقل";
    this.goToAddSubCategoriesFirst = this.textDirection=="ltr"?"No Sub Categories Exists ,Go To add At Least one":
    "لا يوجد اصناف فرعية اذهب لاضافة صنف واحد على الاقل";
  }

  ngOnInit(): void {
    // this.getAllCategories();
    // this.getAllProducts();
    this.getAllSubCategories();
    this.ProductId  = this.getUrlParameter("id");
    this.getSelectedProduct();
  }
  getAllSubCategories(){
    this.subCatService.getAllSubCategories().subscribe(
      data=>this.allSubCategories = data,
    );
  }
  
  // getAllCategories(){
  //   this.categoryService.getAllCategories().subscribe(
  //     data=>this.allCategories = data,
  //   );
  // }
  // getAllProducts(){
  //   this.productService.getAllProducts().subscribe(
  //     data=>this.allProducts = data,
  //   );
  // }

  addNewProduct(){
    this.productService.addNewProduct(this.productModel).subscribe(
      (data)=>{
        let language=localStorage.getItem("lang");
        let successMessage ='';
        successMessage = language=="en"?`Product Added Successfully!`:
        `تم إضافة منتج جديد بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
        this.router.navigate(["/admin/adminLayout/showProducts"]);
      },
      (error)=>{
        this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
      }
    );
  }
  updateProduct(){
    let updatedSuccessfully = this.textDirection=='rtl'?"تم تعديل المنتج بنجاح":"Product Updated Suuccessfully !";
    let updatedFailure = this.textDirection=='rtl'?"! لم يتم تعديل المنتج":"Product does not Updated  !";
    this.productService.updateProduct(this.ProductId,this.productModel).subscribe(
      (res)=>{
        if(res){
          this.sharedService.showSnackBar(updatedSuccessfully,4000,'successSnackBar');
        }else{
          this.sharedService.showSnackBar(updatedFailure,4000,'warningSnackBar');
        }
      },
      (error)=>this.sharedService.showSnackBar(error,4000,'dangerSnackBar')
    );
  }
  saveProduct(){
    if(this.ProductId<=0){
        this.addNewProduct();
    }else{
        this.updateProduct();
    }
    this.back();
  }

  back(){
    this.location.back();
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
    this.productService.getProductById(this.ProductId).subscribe(
      (data)=>{
        this.productModel = data;
        //this.subCategoryName = this.textDirection=='rtl'?data.nameAr:data.name;
      },
      (error)=>this.errorMessage = error
    )
   }


   ///////////////////////////////////////////////////////////////////////
   images=[];
   selectedImages=[];
   onImagesSelected(event:any){
    this.selectedImages = event.target.files;
    console.log(event.target.files.length);
  }   
  onImagesUpload(){
    let formData = new FormData();
    for (let index = 0; index < this.selectedImages.length; index++) {      
    }
  }
}
