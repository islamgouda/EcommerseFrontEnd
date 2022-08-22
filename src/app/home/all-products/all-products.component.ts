import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct, IProductt, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { DiscountPipe } from 'src/helpers/pipes/discount.pipe';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productList:IShowProduct[]=[];

  lang:string;
  constructor(private productService:ProductService,public shared:SharedService,private router:Router) {
    this.lang=localStorage.getItem("lang")||"en";
   }
  
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
  goDetails(id:number){
   let url="/home/productDetails/";
   this.router.navigate([url,id]);
  }
}
