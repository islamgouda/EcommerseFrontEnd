import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  lang:any; 
  textDirection:string;
  constructor(private translateservice:TranslateService,private router:Router,private sharedService:SharedService) {
    this.translateservice.setDefaultLang("en");
    this.translateservice.use(localStorage.getItem('lang')||'en');
    this.textDirection = this.sharedService.textDirection;
   }

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang")||"en";
  }
  goSearchProduct(){
    this.router.navigate(['/home/productsByProductName'])
  }
  changeSelectedLanguage(event:any){
    localStorage.setItem("lang",event);
    window.location.reload();
  }

  logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    this.router.navigate(['discounts']);


  }


}
