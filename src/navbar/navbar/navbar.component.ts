import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  lang:any;
  constructor(private translateservice:TranslateService,private router:Router) {
    this.translateservice.setDefaultLang("en");
    this.translateservice.use(localStorage.getItem('lang')||'en');
   }

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang")||"en";
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
