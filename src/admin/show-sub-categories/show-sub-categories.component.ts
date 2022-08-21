import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { INewCategoryResponse } from 'src/helpers/interfaces/iproduct';
import { ISubCategory } from 'src/helpers/interfaces/isub-category';

import { CategoryService } from 'src/helpers/services/category.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';

@Component({
  selector: 'app-show-sub-categories',
  templateUrl: './show-sub-categories.component.html',
  styleUrls: ['./show-sub-categories.component.scss']
})
export class ShowSubCategoriesComponent implements OnInit {

  textDirection;
  subCategoriesList:ISubCategory[]=[];
  categoriesList:ICategory[]=[];
  subCategoryModel:ISubCategory={arabicName:"",arabicDescription:"",description:"",name:"",categoryName:"",image:"",categoryId:-1}
  selectedCategoryId:number=-1;
  selectedSubCategoryId:number=-1;
  errorMessage:string="";
 
  constructor(private sharedService:SharedService,private categoryService:CategoryService,private subCatService:SubCategoryService) 
  {
    this.textDirection = this.sharedService.textDirection;
   }

  ngOnInit(): void {
    this.getAllSubCategories();
    this.getAllCategories();
  }
  changeCategory(){
    this.selectedSubCategoryId=-1;
    this.getRelatedSubCategory();
    console.log("sub category list : "+this.subCategoriesList);
  }
  changeSubCategory(){
    
    this.getSelectedSubCategoryById();
  }

  getAllSubCategories(){
    this.subCatService.getAll().subscribe(
      (data)=>{
        this.subCategoriesList=data.data;
      },
      (error)=>{
        this.errorMessage = error;
      }
    )
  }
 
  getImageName(img:string){
    let url =  "http://localhost:5092/Images/SubCategory/"+img;
    url=url.replace(" ","%20");
    console.log(url);
    return url;
  }
 
  getAllCategories(){
    this.categoryService.getAllCategoriesWithSubCategories().subscribe(
      (data)=>{
        console.log(data.data);
        this.categoriesList = data.data as INewCategoryResponse[];
      },
      (error)=>{
        this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
      }
    )
  }
  getRelatedSubCategory(){
    this.subCategoriesList=[];
    this.subCatService.getByCategoryId(this.selectedCategoryId).subscribe(
      data=>{
        this.subCategoriesList=data.data as ISubCategory[];
        console.log("+++++++++++++++++sub cat list++++++++++++++++++++++++++++++")
        console.log(this.subCategoriesList)
      }
    );
  }
  getSelectedSubCategoryById(){
    this.subCatService.getById(this.selectedSubCategoryId).subscribe(
      data=>{
        this.subCategoryModel = data.data as ISubCategory;
        console.log("-----------image------------------------");
        console.log(this.subCategoryModel.image);
      }
    )
  }
  

}
