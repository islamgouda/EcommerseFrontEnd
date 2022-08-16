import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/helpers/interfaces/icategory';
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
  productModel:IProduct={name:"",Description:"",Name_Ar:"",Description_Ar:"",CategoryID:-1,Quantity:null,IsAvailable:true,Price:null,subcategoryID:-1,images:[]};
  allSubCategories:ISubCategory[]=[];
  allCategories:ICategory[]=[];

  relatedSubCategories:ISubCategory[]=[];
  noSubCatRelatedToThisCategory:string="";
  isSubCatSelectOptionHidden:boolean=true;
  ProductId:number=-1;
  errorMessage:string="";
  // goToAddCategoriesFirst:string=""
    // allProducts:IProduct[]=[];
   
  goToAddSubCategoriesFirst:string=""
  constructor(private location:Location,private activatedRoute:ActivatedRoute,
    private sharedService:SharedService, private router:Router,
    private productService:ProductService,
    private categoryService:CategoryService,private catService:CategoryService,private subCategoryService:SubCategoryService) { 
    this.textDirection = this.sharedService.textDirection;
    this.language = localStorage.getItem("lang")||"en";
    // this.goToAddCategoriesFirst = this.textDirection=="ltr"?"No Categories Exists ,Go To add At Least one":
    // "لا يوجد اصناف اذهب لاضافة صنف واحد على الاقل";
    this.goToAddSubCategoriesFirst = this.textDirection=="ltr"?"No Sub Categories Exists ,Go To add At Least one":
    "لا يوجد اصناف فرعية اذهب لاضافة صنف واحد على الاقل";
  }

  ngOnInit(): void {
    // this.getAllProducts();
    // this.getAllSubCategories();
    this.getAllCategories();
    this.ProductId  = this.getUrlParameter("id");
    // this.getSelectedProduct();
  }

  getAllCategories(){
    this.categoryService.getAll().subscribe(
      (data)=>{
        console.log(data);
        this.allCategories = <ICategory[]>data;
      },
      (error)=>{
        this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
      }
    )
  }
  // getAllSubCategories(){
  //   this.subCategoryService.getAll().subscribe(
  //     (data)=>{
  //       console.log(<ISubCategory[]>data.data);
  //       this.allSubCategories = data.data;
  //     },
  //     (error)=>{
  //       this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
  //     }
  //   )
  // }
  file:[]=[];
  formData:FormData=new FormData();
  onfileChange(event:any){
    this.file = event.target.files;
    for (let i = 0; i < this.file.length; i++) {
      this.formData.append("image"+i,this.file[i]);
    }
  }


  onChangeCategory(){
    this.relatedSubCategories =[];
     this.subCategoryService.getByCategoryId(this.productModel.CategoryID).subscribe(
      data=>{
        let allsubcats = data.data as ISubCategory[];
        console.log(" 1- "+allsubcats);
        this.relatedSubCategories = allsubcats;
        if(this.relatedSubCategories.length==0){
          this.noSubCatRelatedToThisCategory = "No Sub Categories Related To this Category !";
          this.sharedService.showSnackBar(this.noSubCatRelatedToThisCategory,4000,'warningSnackBar');
        }else{
          this.isSubCatSelectOptionHidden = false;
        }
      }
     );
  }
 
  addNewProduct(){
    let isTrue = this.productModel.IsAvailable==true?"true":"false";
    this.formData.append("Price",this.productModel.Price!.toString());    
    this.formData.append("subcategoryID",this.productModel.subcategoryID.toString());
    this.formData.append("CategoryID",this.productModel.CategoryID.toString());
    this.formData.append("Description",this.productModel.Description);
    this.formData.append("Description_Ar",this.productModel.Description_Ar);
    this.formData.append("Name",this.productModel.name);
    this.formData.append("Name_Ar",this.productModel.Name_Ar);
    this.formData.append("IsAvailable",isTrue);
    this.formData.append("Quantity",this.productModel.Quantity!.toString());
    
  //   const data = {
  //     Price: this.productModel.Price!,
  //     subcategoryID: true,
  //     Description: this.productModel.Description,
  //     Description_Ar: this.productModel.Description_Ar,
  //     Name:this.productModel.name,
  //     Name_Ar:this.productModel.Name_Ar,
  //     IsAvailable: this.productModel.IsAvailable,
  //     Quantity:this.productModel.Quantity!
  // };
  //  this.formData.append("object",JSON.stringify(data))
  //  let status = this.productService.add(this.formData);


    let status = this.productService.add(this.formData);
    if(status==4){
      let language=localStorage.getItem("lang");
        let successMessage ='';
        successMessage = language=="en"?`Product Added Successfully!`:
        `تم إضافة منتج جديد بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
    }else{
      this.sharedService.showSnackBar("Error Occurs !",3000,'dangerSnackBar');
    }

    // this.productService.add(this.formData).subscribe(
    //   (data)=>{
    //     let language=localStorage.getItem("lang");
    //     let successMessage ='';
    //     successMessage = language=="en"?`Product Added Successfully!`:
    //     `تم إضافة منتج جديد بنجاح !`;
    //     this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
    //     console.log("Error ------------"+data)
    //     // this.back();
    //   },
      // (error)=>{
      //   this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
      // }
    // );
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


   
}
