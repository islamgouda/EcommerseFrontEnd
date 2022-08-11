import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalProject';
  constructor(private tarnslateService:TranslateService){
    this.tarnslateService.setDefaultLang("en");
    this.tarnslateService.use(localStorage.getItem('lang')||'en');
  }
}
