import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textDirection:string;
  constructor(private sharedService:SharedService) {
    this.textDirection = this.sharedService.textDirection;
   }

  ngOnInit(): void {
    
  }

}
