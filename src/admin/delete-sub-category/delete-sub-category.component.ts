import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubCategory } from 'src/helpers/interfaces/isub-category';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';


@Component({
  selector: 'app-delete-sub-category',
  templateUrl: './delete-sub-category.component.html',
  styleUrls: ['./delete-sub-category.component.scss']
})
export class DeleteSubCategoryComponent implements OnInit {

  textDirection:string="";
  subCategoriesList:ISubCategory[]=[];
  subCategory:ISubCategory={name:"",arabicName:"",categoryId:-1,description:"",arabicDescription:"",image:""}
  errorMessage:string="";
  subCategoryName:string="asd";
  catID:number=-1;
  constructor(private activatedRoute:ActivatedRoute,private location:Location,private subCatService:SubCategoryService,private sharedservice:SharedService) {
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
    this.subCatService.getById(this.catID).subscribe(
      (data)=>{
        this.subCategory = data.data;
        this.subCategoryName = this.textDirection=='rtl'?this.subCategory.arabicName:this.subCategory.name;
      },
      (error)=>this.errorMessage = error
    )
   }
  confirmDeleteSubCategory(){
    let deleteSuccessMessage = this.textDirection=="ltr"?"Deleted Done Successfully !":"تمت عملية الحذف بنجاج";
    let deleteFailerMessage = this.textDirection=="ltr"?"Can not Delete Sub Category !":"لم تتم عملية الحذف ";
    this.subCatService.delete(this.catID).subscribe(
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
