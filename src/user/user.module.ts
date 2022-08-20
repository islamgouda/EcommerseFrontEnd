import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageInterceptor } from 'src/helpers/interceptors/language.interceptor';
import { UserPaymentHistoryComponent } from './user-payment-history/user-payment-history.component';
import { UserShippingComponent } from './user-shipping/user-shipping.component';
//adding to execute localization
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    UserLayoutComponent,
    UserLandingPageComponent,
    UserPaymentHistoryComponent,
    UserShippingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  })
  ],
  providers:
  [
    //adding to execute localization
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    },
    HttpClient
  ]
})
export class UserModule { }
