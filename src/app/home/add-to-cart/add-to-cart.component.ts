import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAddToCart, IProduct, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { CartItemsService } from 'src/helpers/services/cart-items.service';
import { ProductService } from 'src/helpers/services/product.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  productID:number=-1;
  userQuantity:number=1;
  addToCartModel:IAddToCart={productId:-1,quantity:-1};
  productModel:IShowProduct = {categoryName:"",description:"",description_Ar:"",discount:0,images:[],isAvailable:true,name:"",
name_Ar:"",partenerName:"",price:1,quantity:1,subcategoryName:"",id:1};
  constructor(private cartItemService:CartItemsService,private activatedRoute:ActivatedRoute,private productService:ProductService,private shared:SharedService,private location:Location) { }

  ngOnInit(): void {
    this.productID = this.getUrlParameter("id");
    this.getPRoductByID();
  }
  getUrlParameter(paramName:string):number{
    let parameter = -1;
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        parameter = Number(params.get(paramName));
      }
    )
    return parameter;
  }
  getPRoductByID(){
    this.productService.getById(this.productID).subscribe(
      data=>{
        this.productModel = data.data as IShowProduct;
        console.log(data)
      }
    );
  }

  addProductToCart(){
    this.addToCartModel.productId = this.productID;
    this.addToCartModel.quantity = this.userQuantity;
    this.cartItemService.addToCartItems(this.addToCartModel).subscribe(
      data=>{
        if(data.success){
          this.shared.showSnackBar(data.message,3000,"successSnackBar");
          window.location.reload();
        }else{
          this.shared.showSnackBar(data.message,3000,"dangerSnackBar");
        }
      }
    );
    this.shared.getCartItemsCount();

    this.back();

  }
  back(){
   this.location.back();
  }

}
