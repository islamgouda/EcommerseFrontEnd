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
  categoriesList:ICategory[]=[];
  category:ICategory={name:"",nameAr:"",description:"",descriptionAr:""}
  errorMessage:string="";
  subCategoryName:string="asd";
  catID:number=-1;
  constructor(private activatedRoute:ActivatedRoute,private location:Location,private catService:CategoryService,private sharedservice:SharedService) {
    this.textDirection = this.sharedservice.textDirection;
   }

  ngOnInit(): void {
    this.catID = this.getUrlParameter("id");
    this.getSelectedSubCategory();
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
   getSelectedSubCategory(){
    this.catService.getCategoryById(this.catID).subscribe(
      (data)=>{
        this.category = data;
        this.subCategoryName = this.textDirection=='rtl'?data.nameAr:data.name;
      },
      (error)=>this.errorMessage = error
    )
   }
   confirmDeleteCategory(){
    let deleteSuccessMessage = this.textDirection=="ltr"?"Deleted Done Successfully !":"تمت عملية الحذف بنجاج";
    let deleteFailerMessage = this.textDirection=="ltr"?"Can not Delete Category !":"لم تتم عملية الحذف ";
    this.catService.deleteCategory(this.catID).subscribe(
     (res)=>{
      if(res){
        this.sharedservice.showSnackBar(deleteSuccessMessage,4000,'successSnackBar');
      }else{
        this.sharedservice.showSnackBar(deleteSuccessMessage,4000,'dangerSnackBar');
      }
     },
     (error)=>this.sharedservice.showSnackBar(error,4000,'dangerSnackBar')
    )
    this.location.back();
  }
  back(){
    this.location.back();
  }

}
