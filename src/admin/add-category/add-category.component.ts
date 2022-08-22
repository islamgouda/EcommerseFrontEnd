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
  categoryModel:ICategory={name:"",name_Ar:"",description:"",description_Ar:""};
  updateIdCategory:number=-1;
  constructor(private location:Location,private sharedService:SharedService,private categoryService:CategoryService,
    private router:Router,private activatedRoute:ActivatedRoute) {
    this.textDirection = this.sharedService.textDirection;
   }
  ngOnInit(): void {
   this.updateIdCategory = this.getUrlParameter("id");
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
    let successMessage ='';
    this.categoryService.add(this.categoryModel).subscribe(
      (data)=>{
        successMessage = language=="en"?`Category Added Successfully!`:
        `تم إضافة صنف بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
        this.router.navigate(["/admin/adminLayout/showCategories"]);
        if(data.success){
          window.location.reload();
        }
      },
      (error)=>{
        if(error=="")
        error = "Category doesn't saved !"
        this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
      }
    );
  }
  saveUpdatedCategory(){
    this.categoryService.update(this.updateIdCategory,this.categoryModel).
    subscribe(
      (data)=>{
        let successMessage="";
        let language=localStorage.getItem("lang");
        successMessage = language=="en"?`Category Updated Successfully!`:
        `تم تعديل الصنف بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
      },
      (error)=>{
        this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
      }
    );
  }
  
  bindingUpdateDataToModel(){
    if(this.updateIdCategory!=-1){
      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
      this.categoryService.getById(this.updateIdCategory).subscribe(
        (data)=>{
          this.categoryModel = <ICategory>data;
          console.log("--------------------------------------------------------------");
          console.log(data.data);
          console.log("--------------------------------------------------------------");
          this.categoryModel.name = data.data.name;
          this.categoryModel.name_Ar = data.data.name_Ar;
          this.categoryModel.description =  data.data.description;
          this.categoryModel.description_Ar =  data.data.description_Ar;
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
    this.back();
  }
  back(){
    this.location.back();
  }  
}
