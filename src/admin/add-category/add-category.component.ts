import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { CategoryService } from 'src/helpers/services/category.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  textDirection:string;
  categoryModel:ICategory={name:"",description:"",nameAr:"",descriptionAr:""};
  updateIdCategory:number=-1;
  constructor(private location:Location,private sharedService:SharedService,private categoryService:CategoryService,
    private router:Router,private activatedRoute:ActivatedRoute) {
    this.textDirection = this.sharedService.textDirection;
   }
  ngOnInit(): void {
   this.updateIdCategory = this.getUrlParameter("id");
   console.log("____________________________________"+this.updateIdCategory);
   if(this.updateIdCategory>0){
    this.bindingUpdateDataToModel();
   }
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
  AddCategory(){
    let language=localStorage.getItem("lang");
    let successMessage =''
    this.categoryService.addNewCategory(this.categoryModel).subscribe(
      (data)=>{
        successMessage = language=="en"?`Category ${data.name} Added Successfully!`:
        `تم إضافة صنف ${data.nameAr} بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
        this.router.navigate(["/admin/adminLayout/showCategories"]);
      },
      (error)=>{
        this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
      }
    );
  }
  saveUpdatedCategory(){
    this.categoryService.updateCategory(this.updateIdCategory,this.categoryModel).
    subscribe(
      (data)=>{
        let successMessage="";
        let language=localStorage.getItem("lang");
        successMessage = language=="en"?`Category Updated Successfully!`:
        `تم تعديل الصنف بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
        this.router.navigate(["/admin/adminLayout/showCategories"]);
      },
      (error)=>{
        this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
      }
    );
  }
  bindingUpdateDataToModel(){
    if(this.updateIdCategory!=-1){
      this.categoryService.getCategoryById(this.updateIdCategory).subscribe(
        (data)=>{
          this.categoryModel!.name = data.name;
          this.categoryModel!.nameAr = data.nameAr;
          this.categoryModel!.description = data.description;
          this.categoryModel!.descriptionAr = data.descriptionAr;
        }
      );
    }
  }

  saveCategory(){
    if(this.updateIdCategory<=0){
      this.AddCategory();
    }else{
      this.saveUpdatedCategory();
    }
  }
  back(){
    this.location.back();
  }  
}
