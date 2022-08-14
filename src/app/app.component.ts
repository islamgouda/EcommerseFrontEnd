import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginServiceService } from 'src/Services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalProject';
  constructor(private tarnslateService:TranslateService,private loginservic:LoginServiceService){
    this.tarnslateService.setDefaultLang("en");
    this.tarnslateService.use(localStorage.getItem('lang')||'en');
    //console.log(this.loginservic.UserName);
  }
 
}
