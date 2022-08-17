import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IDisplayProducts } from 'src/helpers/interfaces/idisplay-products';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
  textDirection;
  errorMessage:string="";
  productsList:IDisplayProducts[]=[];
  constructor(private location:Location,private sharedService:SharedService,private subCatService:SubCategoryService,private productService:ProductService) 
  {
    this.textDirection = this.sharedService.textDirection;
   }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    // this.productService.getAllProducts().subscribe(
    //   (data)=>{
    //     this.productsList=data;
    //   },
    //   (error)=>{
    //     this.errorMessage = error;
    //   }
    // )
  }
  back(){ 
    this.location.back();
  }
}
