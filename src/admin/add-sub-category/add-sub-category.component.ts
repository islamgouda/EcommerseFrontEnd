import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { I_Category } from 'src/helpers/interfaces/icategory';
import { I_SubCategory } from 'src/helpers/interfaces/isub-category';
import { CategoryService } from 'src/helpers/services/category.service';
import { GenericApiHandlerService } from 'src/helpers/services/generic-api-handler.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {
  selectedFile:File|null=null;
  formDate = new FormData();
  textDirection:string;
  language:string;
  updateSubCategoryWithId:number;
  subCategoryModel:I_SubCategory={Name:"",Description:"",arabicName:"",arabicDescription:"",image:null,CategoryId:-1};
  allCategories:I_Category[]=[];
  subCatID:number=-1;
  errorMessage:string="";
  goToAddCategoriesFirst:string=""
  constructor(private http:HttpClient,private genericService:GenericApiHandlerService,private location:Location,private activatedRoute:ActivatedRoute,private sharedService:SharedService, private router:Router,private categoryService:CategoryService,private subCatService:SubCategoryService) { 
    this.textDirection = this.sharedService.textDirection;
    this.language = localStorage.getItem("lang")||"en";
    this.updateSubCategoryWithId = -1; 
    this.goToAddCategoriesFirst = this.textDirection=="ltr"?"No Categories Exists ,Go To add At Least one":
    "لا يوجد اصناف اذهب لاضافة صنف واحد على الاقل";
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.subCatID  = this.getUrlParameter("id");
    // this.getSelectedSubCategory();
  }
  getAllCategories(){
    this.categoryService.getCategories().subscribe(
      data=>this.allCategories = data,
    );
  }

  addNewSubCategory(){
   // this.subCategoryModel.image = this.sharedService.modifyImageName(this.subCategoryModel.image);
    this.subCatService.addNewSubCategory(this.subCategoryModel).subscribe(
      (data)=>{
        let language=localStorage.getItem("lang");
        let successMessage ='';
        successMessage = language=="en"?`Sub Category ${data.Name} Added Successfully!`:
        `تم إضافة  صنف فرعى جديد ${data.arabicName} بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
        this.router.navigate(["/admin/adminLayout/showSubCategories"]);
      },
      (error)=>{
        if(error.length==0){
          error = "can not save subcategory";
        }
        this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
      }
    );
  }
  updateSubCategory(){
    let updatedSuccessfully = this.textDirection=='rtl'?"تم تعديل الصنف الفرعى بنجاح":"Sub Category Updated Suuccessfully !";
    let updatedFailure = this.textDirection=='rtl'?"! لم يتم تعديل الصنف الفرعى":"Sub Category does not Updated  !";
    this.subCatService.updateSubCategory(this.subCatID,this.subCategoryModel).subscribe(
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
  saveSubCategory(){
    if(this.subCatID<=0){
        // this.addNewSubCategory();
        this.onUpload();
    }else{
        this.updateSubCategory();
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

  /// ------------don't delete  getSelectedSubCategory function

  //  getSelectedSubCategory(){
  //   this.subCatService.getSubCategoryById(this.subCatID).subscribe(
  //     (data)=>{
  //       this.subCategoryModel = data;
  //       //this.subCategoryName = this.textDirection=='rtl'?data.nameAr:data.name;
  //     },
  //     (error)=>this.errorMessage = error
  //   )
  //  }

  onImageSelect(event:any){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile?.size);
  }
  onUpload(){
    this.formDate.append('Name',this.subCategoryModel.Name);
    this.formDate.append('arabicName',this.subCategoryModel.arabicName);
    this.formDate.append('Description',this.subCategoryModel.Description);
    this.formDate.append('arabicDescription',this.subCategoryModel.arabicDescription);
    this.formDate.append('image',this.selectedFile!,this.selectedFile!.name);
    this.formDate.append('CategoryId',this.subCategoryModel.CategoryId.toString());

    let url = "http://localhost:5092/api/SubCategory/CreateSubCategory";
    return this.http.post(url,this.formDate,{
      reportProgress:true,
      observe:'events'
    }).pipe(
      catchError(error=>this.genericService.handleError(error))
    ).subscribe(
      data=>console.log("Success : "+JSON.stringify(data)),
      error=>console.log("error : "+error.message),
    );

  }

}
