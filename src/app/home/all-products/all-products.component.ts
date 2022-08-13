import { Component, OnInit } from '@angular/core';
import { IDisplayProducts } from 'src/helpers/interfaces/idisplay-products';
import { ProductService } from 'src/helpers/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:IDisplayProducts[]=[];
  haveDiscount:boolean=true;
  discount:string=this.haveDiscount?"Have Discount":"Have No Discount";
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.allProducts();
  }
  allProducts(){
    this.productService.getAllProducts().subscribe(
      data=>{
        this.products = data;
      }
    )
  }

}
