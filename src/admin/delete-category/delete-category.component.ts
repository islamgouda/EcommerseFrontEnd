import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { CategoryService } from 'src/helpers/services/category.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {

  textDirection:string="";
  categoryModel:ICategory={name:"",name_Ar:"",description:"",description_Ar:""};
  errorMessage:string="";
  CategoryName:string="asd";
  catID:number=-1;
  constructor(private activatedRoute:ActivatedRoute,private location:Location,private catService:CategoryService,private sharedservice:SharedService) {
    this.textDirection = this.sharedservice.textDirection;
    this.CategoryName = this.textDirection=='ltr'?this.categoryModel.name:this.categoryModel.name_Ar;
   }

  ngOnInit(): void {
    this.catID = this.getUrlParameter("id");
    this.getSelectedCategory();
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
   getSelectedCategory(){
    this.catService.getById(this.catID).subscribe(
      (data)=>{
        // this.categoryModel = <ICategory>data.data;
        console.log("---------------------------------------");
        console.log(data.data);
        console.log("---------------------------------------");
        this.categoryModel.name = data.data.name;
        this.categoryModel.name_Ar = data.data.name_Ar;
        this.categoryModel.description = data.data.description;
        this.categoryModel.description_Ar = data.data.description_Ar;
        this.CategoryName = this.textDirection=='ltr'?data.data.name:data.data.name_Ar;
      },
      (error)=>this.errorMessage = error
    )
   }
   confirmDeleteCategory(){
    let deleteSuccessMessage = this.textDirection=="ltr"?"Deleted Done Successfully !":"تمت عملية الحذف بنجاج";
    let deleteFailerMessage = this.textDirection=="ltr"?"Can not Delete Category !":"لم تتم عملية الحذف ";
    this.catService.delete(this.catID).subscribe(
     (res)=>{
      if(res){
        this.sharedservice.showSnackBar(deleteSuccessMessage,4000,'successSnackBar');
      }else{
        this.sharedservice.showSnackBar(deleteSuccessMessage,4000,'dangerSnackBar');
      }
     },
     (error)=>{
      
      this.sharedservice.showSnackBar(error,4000,'dangerSnackBar')
    }
    )
    this.back();
  }


  back(){
    this.location.back();
  }

}
