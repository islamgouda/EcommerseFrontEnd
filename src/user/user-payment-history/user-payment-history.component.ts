import { Component, OnInit } from '@angular/core';
import { IOrderHistory, IUserOrderHistory } from 'src/helpers/interfaces/ihistory';
import { HistoryService } from 'src/helpers/services/history.service';

@Component({
  selector: 'app-user-payment-history',
  templateUrl: './user-payment-history.component.html',
  styleUrls: ['./user-payment-history.component.scss']
})
export class UserPaymentHistoryComponent implements OnInit {

  historyList:IOrderHistory[]=[];
  dataTargets:string[]=[];
  IDs:string[]=[];
  constructor(private historyService:HistoryService) { }

  ngOnInit(): void {
    this.getUserHistory();
    this.getDataTargetAndIDs();
  }
  getUserHistory(){
    this.historyService.getOrderHistory().subscribe(
      data=>{
        if(data.success){
          this.historyList = data.data;
        }
      }
    );
  }

  getDataTargetAndIDs(){
    for (let i = 0; i < this.historyList.length; i++) {
      this.dataTargets[i]="#id"+i;
      this.IDs[i]="id"+i;
    }
  }

}
