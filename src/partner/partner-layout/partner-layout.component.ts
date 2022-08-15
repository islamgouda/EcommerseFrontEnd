import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-partner-layout',
  templateUrl: './partner-layout.component.html',
  styleUrls: ['./partner-layout.component.scss']
})
export class PartnerLayoutComponent implements OnInit {

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
