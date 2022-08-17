import { Component, OnInit } from '@angular/core';
import { IShowCartItemProduct, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { CartItemsService } from 'src/helpers/services/cart-items.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  cartItemsList:IShowCartItemProduct[]=[];
  constructor(private cartItemService:CartItemsService,private shared:SharedService) { }

  ngOnInit(): void {
    this.getAllCartItems();
  }
  getAllCartItems(){
    this.cartItemService.getAllCartItems().subscribe(
      data=>{
        this.cartItemsList=data.message as IShowCartItemProduct[];
        console.log(data);
      }
    );
  }
  deleteItemFromCart(id:number){
    this.cartItemService.deleteFromCart(id).subscribe(
      data=>{
        this.shared.showSnackBar("Item Deleted Succesfully",3000,"warningSnackBar");
        this.getAllCartItems();
      }
    );
  }
}
