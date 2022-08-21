import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProductResponse, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-pending-products',
  templateUrl: './pending-products.component.html',
  styleUrls: ['./pending-products.component.scss']
})
export class PendingProductsComponent implements OnInit {
  productList:IShowProduct[]=[];
  constructor(private http:HttpClient,public shared:SharedService) { }

  ngOnInit(): void {
  
this.GetAllPending();
  }
  GetAllPending()
  {
    this.http.get<IProductResponse>('http://localhost:5092/api/Product/GetPartnerPendingProducts').subscribe(
      data=>{
        this.productList=data.data as IShowProduct[];
        console.log(this.productList);
      }
    )
  }
 

}
