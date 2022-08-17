import { Component, OnInit } from '@angular/core';
import { IDisplayProducts } from 'src/helpers/interfaces/idisplay-products';
import { IProduct, IProductt, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ProductService } from 'src/helpers/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productList:IShowProduct[]=[];
  
  constructor(private productService:ProductService) { }
  
  ngOnInit(): void {
    this.getallProducts();
    
  }
  getallProducts(){
    this.productService.getProducts().subscribe(
      data=>{
        this.productList = data.data as IShowProduct[];
        console.log(this.productList);
      }
    );
  }
  getDiscount(price:number,discount:number){
    return price*discount;
  }
}
