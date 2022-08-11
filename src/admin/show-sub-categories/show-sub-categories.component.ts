import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/helpers/interfaces/icategory';
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
  errorMessage:string="";
  subCategoryName:string="";
  categoriesList:ICategory[]=[];



  
  categoryId:any;
  isShownSuccessAlert:boolean=false;
  isShownErrorAlert:boolean=false;

  getAllCategoryState:string="";
  deleteState:string=""
  isDeleted:boolean=false;

  constructor(private sharedService:SharedService,private categoryService:CategoryService,private subCatService:SubCategoryService) 
  {
    this.textDirection = this.sharedService.textDirection;
   }

  ngOnInit(): void {
    this.getAllSubCategories();
  }

  getAllSubCategories(){
    this.subCatService.getAllSubCategories().subscribe(
      (data)=>{
        this.subCategoriesList=data;
      },
      (error)=>{
        this.errorMessage = error;
      }
    )
  }
  

  getItemNameInSelectedLang(id:any){
    this.subCategoryName = (localStorage.getItem('lang')=="ar"?this.subCategoriesList.
    find(x=>x.id==id)?.nameAr:this.subCategoriesList.find(x=>x.id==id)?.name)||"";
    this.categoryId = id;
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (data)=>{
        console.log(data);
        this.categoriesList = data;
      },
    )
  }
}
