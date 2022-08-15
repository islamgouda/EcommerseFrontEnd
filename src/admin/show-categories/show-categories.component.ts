import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ICategory } from 'src/helpers/interfaces/icategory';
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
  categoriesList:ICategory[]=[];
  getAllCategoryState:string="";
  deleteState:string=""
  isDeleted:boolean=false;
  constructor(private categoryService:CategoryService,private http:HttpClient,private router:Router,private sharedService:SharedService) {
        this.textDirection = this.sharedService.textDirection;
   }
  
  ngOnInit(): void {
    this.getAllCategories();
  }

  serverErrorMessage:string="";
  getAllCategories(){
    this.categoryService.getAll().subscribe(
      (data)=>{
        console.log(data);
        this.categoriesList = <ICategory[]>data;
      },
      (error)=>{
        this.serverErrorMessage=error;
        this.getAllCategoryState ="Errors In Retrieving Data !";
      }
    )
  }


}
