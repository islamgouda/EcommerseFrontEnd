import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageInterceptor } from 'src/helpers/interceptors/language.interceptor';
import { NavbarModule } from 'src/navbar/navbar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { FooterModule } from 'src/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from 'src/admin/add-category/add-category.component';
import { ShowCategoriesComponent } from 'src/admin/show-categories/show-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProductComponent } from 'src/admin/add-product/add-product.component';
import { ShowProductsComponent } from 'src/admin/show-products/show-products.component';
import { UProductsComponent } from './uproducts/uproducts.component';
import { CartComponent } from './cart/cart.component';
import { LoginUserComponent } from './Authentication/login-user/login-user.component';
import { RegisterUserComponent } from './Authentication/register-user/register-user.component';
import { RegisterAdminComponent } from './Authentication/register-admin/register-admin.component';



import { AuthInterceptor } from 'src/Shared/auth.interceptor';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BeaPartnerComponent } from './bea-partner/bea-partner.component';
import { AllProductsComponent } from './home/all-products/all-products.component';
import { ProductsByCategoryComponent } from './home/products-by-category/products-by-category.component';
import { ProductsBySubCategoryComponent } from './home/products-by-sub-category/products-by-sub-category.component';
import { ProductsByPartnerComponent } from './home/products-by-partner/products-by-partner.component';
import { ProductsByProductNameComponent } from './home/products-by-product-name/products-by-product-name.component';
import { ProductsByPriceComponent } from './home/products-by-price/products-by-price.component';
import { HighLightBorderDirective } from 'src/helpers/customeDirective/high-light-border.directive';
import { BeaShipperComponent } from './bea-shipper/bea-shipper.component';


import { AdminModule } from 'src/admin/admin.module';
import { PartnerModule } from 'src/partner/partner.module';
import { PartnerLayoutComponent } from 'src/partner/partner-layout/partner-layout.component';
import { UserModule } from 'src/user/user.module';

import { AddUserAddressComponent } from '../partner/add-user-address/add-user-address.component';

import { DiscountPipe } from 'src/helpers/pipes/discount.pipe';
import { AddToCartComponent } from './home/add-to-cart/add-to-cart.component';
import { CartItemComponent } from './home/cart-item/cart-item.component';
import { ProceedToPayComponent } from './home/proceed-to-pay/proceed-to-pay.component';
import { AddPaymentMethodComponent } from './home/add-payment-method/add-payment-method.component';
import { ShipperModule } from 'src/shipper/shipper.module';
import { UProductDetailsComponent } from './home/u-product-details/u-product-details.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HighLightBorderDirective,
    DefaultLayoutComponent,
    CustomLayoutComponent,
    PageNotFoundComponent,
    ErrorComponent,
    HomeComponent,
    AddCategoryComponent,
    ShowCategoriesComponent,
    AddProductComponent,
    ShowProductsComponent,
    UProductsComponent,
    CartComponent,
    LoginUserComponent,
    RegisterUserComponent,
    RegisterAdminComponent,
    UProductDetailsComponent,
    UserDashboardComponent,
    BeaPartnerComponent,

    AllProductsComponent,
    ProductsByCategoryComponent,
    ProductsBySubCategoryComponent,
    ProductsByPartnerComponent,
    ProductsByProductNameComponent,
    ProductsByPriceComponent,
    BeaShipperComponent,
    ProductsByPriceComponent,
    AddUserAddressComponent,
    AddToCartComponent,
    CartItemComponent,
    ProceedToPayComponent,
    AddPaymentMethodComponent,
    DiscountPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ShipperModule,
    PartnerModule,
    NavbarModule,
    HttpClientModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
   
  ],
  exports:[
   
  ],
  providers: [
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    HttpClient
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
