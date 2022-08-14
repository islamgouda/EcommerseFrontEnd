import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginServiceService } from 'src/Services/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username:string=" ";
 

  lang:any;
  constructor(private translateservice:TranslateService,private router:Router,private loginService:LoginServiceService) {
    this.loginService.getMe().subscribe((name) => {
        this.username=name.userName;
      });
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
    this.router.navigate(['']).then(()=>{
      window.location.reload();

     })


  }


}
