import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { INewCategoryResponse, IProductResponse, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { CategoryService } from 'src/helpers/services/category.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  AllCat:any;
  AllSubCat:any;
  categoryId:number;
  Product:any;
  productList:IShowProduct[]=[];
  subCat: { id: number, name: string }[] = [];
  SubcategoryId:number=0;
  constructor(private categoryService:CategoryService,private sharedService:SharedService,private http:HttpClient) { 
    this.categoryId=0;
  }


  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories(){
    this.categoryService.getAllCategoriesWithSubCategories().subscribe(
      (data)=>{
        console.log(data.data);
        this.AllCat = data.data as INewCategoryResponse[];
      },
      (error)=>{
        this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
      }
    )
  }
GetAllSubCategorys()
{
  this.http.get('http://localhost:5092/api/SubCategory/SubCategorysByCategoryID/'+this.categoryId).subscribe(
    
      data=>{
       this.AllSubCat=data;
       this.subCat=this.AllSubCat.data;
       console.log(this.subCat);
      }
    
  )
}
GetAllProducts()
{
  this.http.get<IProductResponse>('http://localhost:5092/api/Product/PartnerProductsBySubCategory/'+this.SubcategoryId).subscribe(
    data=>{
      console.log(data);
      this.productList = data.data as IShowProduct[];
      console.log(this.productList);

    }
  )
}
}