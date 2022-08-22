import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CartItemsService } from './cart-items.service';
import { IShowCartItemProduct } from '../interfaces/iproduct';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  get textDirection(){
   let textDir=localStorage.getItem('lang')=="ar"?"rtl":"ltr";
   return textDir;
  }
  constructor(private cartItemService:CartItemsService,public activatedRoute:ActivatedRoute,public snackBar:MatSnackBar,public dialog: MatDialog) 
  { 
    
  }
  showSnackBar(msg:string,durationInMS:number,className:string){
    this.snackBar.open(msg, 'Ok', {
      duration: durationInMS,
      panelClass: [className]
    });
  }
  modifyImageName(imageName:string):string{
    let name =imageName;
    let namearr= name.split(".");
    name = namearr[namearr.length-1]
    name = `subCatImage${new Date().getTime()}.${name}`;
    return name;
  }
  getUrlParameter(paramName:string):number{
    let parameter = -1;
    console.log(`########### 1 - ${parameter}`);
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        parameter = Number(params.get(paramName));
        console.log(`########### 2 - ${parameter}`);
      }
    )
    return parameter;
  }
  getCartItemsCount(){
    let cartItemsList;
    this.cartItemService.getAllCartItems().subscribe(
      data=>{
        cartItemsList=data.message as IShowCartItemProduct[];
        localStorage.setItem("cart",cartItemsList.length>0?cartItemsList.length.toString():"0");
        console.log(data);
      }
    );
  }
  calculateDiscount(price:number,discount:number){
    return (price-(price*discount)).toFixed(2);
  }
  isRoleUser(){
    let roles = localStorage.getItem("Roles")||"";
    let rolesList = roles.split(",");
    for (let i = 0; i < rolesList.length; i++) {
      if(rolesList[0]=="User"){
        return true;
      }
    }
    return false;
  }

}
