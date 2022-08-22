import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { PAddDiscountComponent } from './p-add-discount/p-add-discount.component';
import { PartnerLayoutComponent } from './partner-layout/partner-layout.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageInterceptor } from 'src/helpers/interceptors/language.interceptor';
import { FormsModule } from '@angular/forms';
import { PartnerLandingPageComponent } from './partner-landing-page/partner-landing-page.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { PendingProductsComponent } from './pending-products/pending-products.component';
import { DiscountPipe } from 'src/helpers/pipes/discount.pipe';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
//adding to execute localization
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    PartnerLayoutComponent,
    PAddDiscountComponent,
    PartnerLandingPageComponent,
    AllProductsComponent,
    PendingProductsComponent,
    DeleteProductComponent,
    UpdateProductComponent
    
    
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    FormsModule,
    //adding to execute localization
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  })
  ],
  exports:[
  
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
export class PartnerModule { }
