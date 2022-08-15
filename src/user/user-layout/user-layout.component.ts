import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  lang:any;
  textDirection:string;
  constructor(private translateservice:TranslateService) {
    this.translateservice.setDefaultLang("en");
    this.translateservice.use(localStorage.getItem('lang')||'en');
    this.lang = localStorage.getItem('lang');
    this.textDirection=this.lang=='en'?"ltr":"rtl";
   }

  ngOnInit(): void {
  }

}
