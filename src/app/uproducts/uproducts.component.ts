import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IDisplayProducts } from 'src/helpers/interfaces/idisplay-products';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-uproducts',
  templateUrl: './uproducts.component.html',
  styleUrls: ['./uproducts.component.scss']
})
export class UProductsComponent implements OnInit {

  textDirection;
  errorMessage:string="";
  productsList:IDisplayProducts[]=[];
  constructor(private location:Location,private sharedService:SharedService,private productService:ProductService) 
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
