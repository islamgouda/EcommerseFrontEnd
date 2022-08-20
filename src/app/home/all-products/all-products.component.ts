import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { share } from 'rxjs';
import { IDisplayProducts } from 'src/helpers/interfaces/idisplay-products';
import { IProduct, IProductt, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productList:IShowProduct[]=[];
  
  constructor(private productService:ProductService,private shared:SharedService,private router:Router) { }
  
  ngOnInit(): void {
    this.getallProducts();
    this.shared.getCartItemsCount();
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
  buy(id:number){
    let url = "/home/addToCart/";
    if(localStorage.getItem('token')==null){
      this.router.navigate(['/LoginUser']);
    }else{
      this.router.navigate([url,id]);
    }
  }
}
