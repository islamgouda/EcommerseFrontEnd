import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProductResponse, IShowProduct } from 'src/helpers/interfaces/iproduct';

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
  constructor(private http:HttpClient) { 
    this.categoryId=0;
  }


  ngOnInit(): void {
    this.GetAllCategorys();
  }
GetAllCategorys()
{
  this.http.get('http://localhost:5092/api/Category/GetallCategories').subscribe(
    data=>{
      console.log(data);
      this.AllCat=data;
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
