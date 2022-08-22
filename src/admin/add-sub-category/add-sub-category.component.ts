import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory, ICategoryResponse } from 'src/helpers/interfaces/icategory';
import { INewCategoryResponse } from 'src/helpers/interfaces/iproduct';
import { ISubCategory } from 'src/helpers/interfaces/isub-category';
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
  selectedFile:[]=[];
  formDate:FormData = new FormData();
  textDirection:string;
  subCategoryModel:ISubCategory={name:"",description:"",arabicName:"",arabicDescription:"",image:"No Image Sent !",categoryId:-1};
  allCategories:ICategory[]=[];
  subCatID:number=-1;
  errorMessage:string="";
  goToAddCategoriesFirst:string=""
  catID:number=0;
  constructor(private http:HttpClient,private genericService:GenericApiHandlerService,private location:Location,private activatedRoute:ActivatedRoute,private sharedService:SharedService, private router:Router,private categoryService:CategoryService,private subCatService:SubCategoryService) {
    this.textDirection = this.sharedService.textDirection;
    this.goToAddCategoriesFirst = this.textDirection=="ltr"?"No Categories Exists ,Go To add At Least one":
    "لا يوجد اصناف اذهب لاضافة صنف واحد على الاقل";
  }
  ngOnInit(): void {
    this.getAllCategories();
    this.subCatID  = this.getUrlParameter("id");
    this.getSelectedSubCategory();
  }
  getAllCategories(){
    this.categoryService.getAllCategoriesWithSubCategories().subscribe(
      (data)=>{
        console.log(data.data);
        this.allCategories = data.data as INewCategoryResponse[];
      },
      (error)=>{
        this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
      }
    )
  }


  updateSubCategory(){
    let updatedSuccessfully = this.textDirection=='rtl'?"تم تعديل الصنف الفرعى بنجاح":"Sub Category Updated Suuccessfully !";
    let updatedFailure = this.textDirection=='rtl'?"! لم يتم تعديل الصنف الفرعى":"Sub Category does not Updated  !";
    this.formDate.append('Name',this.subCategoryModel.name.toString());
    this.formDate.append('arabicName',this.subCategoryModel.arabicName.toString());
    this.formDate.append('Description',this.subCategoryModel.description.toString());
    this.formDate.append('arabicDescription',this.subCategoryModel.arabicDescription.toString());
    this.formDate.append('CategoryId',this.subCategoryModel.categoryId.toString());
    let  requestStatus = this.subCatService.update(this.subCatID,this.formDate);
    if(requestStatus==4){
      this.sharedService.showSnackBar(updatedSuccessfully,3000,'successSnackBar');
    }else{
      this.sharedService.showSnackBar(updatedFailure,3000,'dangerSnackBar');
    }
  }
   getSelectedSubCategory(){
    this.subCatService.getById(this.subCatID).subscribe(
      (data)=>{
        this.subCategoryModel = data.data;
        this.catID = data.data.categoryId;
      },
      (error)=>this.errorMessage = error
    )
   }
  onImageSelect(event:any){
    this.selectedFile = event.target.files;
    for (let i = 0; i < this.selectedFile!.length; i++) {
      this.formDate.append('image'+i,this.selectedFile[i]);
    }
  }

  addSubCategory(){
    event?.preventDefault();
    this.formDate.append('Name',this.subCategoryModel.name.toString());
    this.formDate.append('arabicName',this.subCategoryModel.arabicName.toString());
    this.formDate.append('Description',this.subCategoryModel.description.toString());
    this.formDate.append('arabicDescription',this.subCategoryModel.arabicDescription.toString());
    this.formDate.append('CategoryId',this.subCategoryModel.categoryId.toString());
    let  requestStatus = this.subCatService.add(this.formDate);
    let successMessage ='';
    let language=localStorage.getItem("lang");
    if(requestStatus==4){
        successMessage = language=="en"?`Sub Category  Added Successfully!`:
        `تم إضافة  صنف فرعى جديد بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
    }else{
      successMessage = language=="en"?`Sub Category  Added Successfully!`:
      "غير قادر على اضافة صنف فرعى جديد";
      this.sharedService.showSnackBar(successMessage,3000,'dangerSnackBar');
    }
  }
  saveSubCategory(){
    if(this.subCatID<=0){
        this.addSubCategory();
    }else{
        this.updateSubCategory();
    }
    this.back();
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
  back(){
    this.location.back();
  }
}
