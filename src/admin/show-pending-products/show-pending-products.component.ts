import { Component, OnInit } from '@angular/core';
import { IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ProductService } from 'src/helpers/services/product.service';

@Component({
  selector: 'app-show-pending-products',
  templateUrl: './show-pending-products.component.html',
  styleUrls: ['./show-pending-products.component.scss']
})
export class ShowPendingProductsComponent implements OnInit {
  productList:IShowProduct[]=[];
  lang:string;
  constructor(private productService:ProductService) {
    this.lang=localStorage.getItem("lang")||"en";
   }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllPendingProducts().subscribe(
    data=>{
      this.productList = data.data;
    }
    )
  }

}
