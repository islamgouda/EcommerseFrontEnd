import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/helpers/interfaces/icategory';
import { IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ISubCategory } from 'src/helpers/interfaces/isub-category';
import { CategoryService } from 'src/helpers/services/category.service';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';

@Component({
  selector: 'app-products-by-sub-category',
  templateUrl: './products-by-sub-category.component.html',
  styleUrls: ['./products-by-sub-category.component.scss']
})
export class ProductsBySubCategoryComponent implements OnInit {
  subCategoriesList:ISubCategory[]=[];
  categoriesList:ICategory[]=[];
  productList:IShowProduct[]=[];
  isButtonClicked:boolean=false;
  selectedCategoryId:number=-1;
  selectedSubCategoryId:number=-1;
  textDirection:string;
  constructor(private productService:ProductService,private sharedService:SharedService,private categoryService:CategoryService,private subCatService:SubCategoryService) 
  {
    this.textDirection = this.sharedService.textDirection;
   }

  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories(){
    this.categoryService.getAll().subscribe(
      data=>{
        console.log("data - - -  -- "+data.data);
        this.categoriesList = data as ICategory[];
      }
    );
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

  changeCategory(){
    this.selectedSubCategoryId=-1;
    this.getRelatedSubCategory();
    console.log("sub category list : "+this.subCategoriesList);
  }
  
  getproductsBySubCategoryId(){
    this.productList=[];
    this.productService.getProductsBySubCategoryId(this.selectedSubCategoryId).subscribe(
      data=>{
        console.log("----------data---------------");
        console.log(data);
        this.productList = data.data as any[];
        console.log("----------cat List---------------");
        console.log(this.productList);
      }
    );
    this.isButtonClicked = true;
  }
}
