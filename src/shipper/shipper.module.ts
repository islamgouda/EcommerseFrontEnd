import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperRoutingModule } from './shipper-routing.module';
import { ShipperLayoutComponent } from './shipper-layout/shipper-layout.component';
import { ShipperLandingPageComponent } from './shipper-landing-page/shipper-landing-page.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LanguageInterceptor } from 'src/helpers/interceptors/language.interceptor';
import { ShipperUpdateStateComponent } from './shipper-update-state/shipper-update-state.component';

//adding to execute localization
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ShipperLayoutComponent,
    ShipperLandingPageComponent,
    ShippingDetailsComponent,
    ShipperUpdateStateComponent
  ],
  imports: [
    CommonModule,
    ShipperRoutingModule,
    //adding to execute localization
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
export class ShipperModule { }
