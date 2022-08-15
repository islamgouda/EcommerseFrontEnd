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
 
  constructor(private sharedService:SharedService,private categoryService:CategoryService,private subCatService:SubCategoryService) 
  {
    this.textDirection = this.sharedService.textDirection;
   }

  ngOnInit(): void {
    this.getAllSubCategories();
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
}
