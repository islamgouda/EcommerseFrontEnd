import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ICategory, I_Category } from 'src/helpers/interfaces/icategory';
import { CategoryService } from 'src/helpers/services/category.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.scss']
})
export class ShowCategoriesComponent implements OnInit {
  textDirection;
  categoryName:string="";
  categoryId:any;
  isShownSuccessAlert:boolean=false;
  isShownErrorAlert:boolean=false;
  categoriesList:I_Category[]=[];
  getAllCategoryState:string="";
  deleteState:string=""
  isDeleted:boolean=false;
  constructor(private categoryService:CategoryService,private router:Router,private sharedService:SharedService) {
        this.textDirection = this.sharedService.textDirection;
   }
  
  ngOnInit(): void {
    this.getAllCategories();
    
  }
 
  showErrorAlert(){
    this.isShownErrorAlert=true;
    setTimeout(()=>{
      window.location.reload();
      this.isShownErrorAlert = false;
    },3000);
  }
  showSuccesAlert(){
    this.isShownSuccessAlert=true;
    setTimeout(()=>{
      window.location.reload();
      this.isShownSuccessAlert = false;
    },3000);
  }


  deleteCategory(id:any){
    this.categoryService.deleteCategory(id).subscribe(
      (res)=>{ 
        let message = this.sharedService.textDirection=='ltr'?"Category Deleted Successfully":"تم مسح الصنف بنجاح";
        this.sharedService.showSnackBar(message,4000,'successSnackBar');
        window.location.reload();
      },
      (error)=>{
        let message = this.sharedService.textDirection=='ltr'?"Can not Delete Category !":"غير قادر على حذف الصنف";
        this.sharedService.showSnackBar(message,4000,'dangerSnackBar');
        window.location.reload();
      }
    );
  }
  serverErrorMessage:string="";
  getAllCategories(){
    this.categoryService.getCategories().subscribe(
      (data)=>{
        console.log(data);
        this.categoriesList = data;
      },
      (error)=>{
        this.serverErrorMessage=error;
        this.getAllCategoryState ="Errors In Retrieving Data !";
      }
    )
  }


}
