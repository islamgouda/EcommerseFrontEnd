import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard } from 'src/has-role.guard';
import { HomeLandingPageComponent } from 'src/home-landing-page/home-landing-page.component';
import { AddUserAddressComponent } from 'src/partner/add-user-address/add-user-address.component';
import { LoginUserComponent } from './Authentication/login-user/login-user.component';
import { RegisterAdminComponent } from './Authentication/register-admin/register-admin.component';
import { RegisterUserComponent } from './Authentication/register-user/register-user.component';
import { BeaPartnerComponent } from './bea-partner/bea-partner.component';
import { BeaShipperComponent } from './bea-shipper/bea-shipper.component';
import { CartComponent } from './cart/cart.component';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AddPaymentMethodComponent } from './home/add-payment-method/add-payment-method.component';
import { AddToCartComponent } from './home/add-to-cart/add-to-cart.component';
import { AllProductsComponent } from './home/all-products/all-products.component';
import { CartItemComponent } from './home/cart-item/cart-item.component';
import { HomeComponent } from './home/home.component';
import { ProceedToPayComponent } from './home/proceed-to-pay/proceed-to-pay.component';
import { ProductsByCategoryComponent } from './home/products-by-category/products-by-category.component';
import { ProductsByPartnerComponent } from './home/products-by-partner/products-by-partner.component';
import { ProductsByPriceComponent } from './home/products-by-price/products-by-price.component';
import { ProductsByProductNameComponent } from './home/products-by-product-name/products-by-product-name.component';
import { ProductsBySubCategoryComponent } from './home/products-by-sub-category/products-by-sub-category.component';
import { UProductDetailsComponent } from './home/u-product-details/u-product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UProductsComponent } from './uproducts/uproducts.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [

  {
    path: "userdash", component: UserDashboardComponent,
    canActivate: [HasRoleGuard],
    data: { role: 'User' },
  }, //userdashboardto requests
  { path: "bePartner", component: BeaPartnerComponent },
  { path: "beShipper", component: BeaShipperComponent },
  { path: "home", redirectTo:'home/landing', pathMatch: 'full'}, //deafualt page
  { path: "", redirectTo:'home/landing', pathMatch: 'full'}, //deafualt page
  {
    path: 'home', component: HomeComponent, children: [
      { path: "landing", component: HomeLandingPageComponent },
      { path: 'AllProducts', component: AllProductsComponent },
      { path: 'productDetails/:id', component:UProductDetailsComponent },
      { path: 'productsByCategory', component: ProductsByCategoryComponent },
      { path: 'productsBySubCategory', component: ProductsBySubCategoryComponent },
      { path: 'productsByPartner', component: ProductsByPartnerComponent },
      { path: 'productsByProductName', component: ProductsByProductNameComponent },
      { path: 'productsByPrice', component: ProductsByPriceComponent },
      { path: 'addToCart/:id', component: AddToCartComponent },
      { path: 'cartItems', component: CartItemComponent },
      { path: 'checkOut', component: ProceedToPayComponent },
      { path: 'addAddress', component: AddUserAddressComponent },
      { path: 'addPayemntMethod', component: AddPaymentMethodComponent },
    ]
  },

  { path: 'products', component: UProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'defaultLayout', component: DefaultLayoutComponent },
  { path: 'customLayout', component: CustomLayoutComponent },
  { path: "navbar", loadChildren: () => import("../navbar/navbar.module").then(x => x.NavbarModule) },
  { path: "footer", loadChildren: () => import("../footer/footer.module").then(x => x.FooterModule) },
  {
    path: 'admin', loadChildren: () => import("../admin/admin.module").then(m => m.AdminModule),
    canActivate: [HasRoleGuard],
    data: { role: 'Admin' },
  },
  {
    path: 'shipper', loadChildren: () => import("../shipper/shipper.module").then(m => m.ShipperModule),
    // canActivate: [HasRoleGuard],
    // data: { role: 'Shipper' },
  },
  {
    path: 'partner', loadChildren: () => import("../partner/partner.module").then(m => m.PartnerModule),
    canActivate: [HasRoleGuard],
    data: { role: 'Partener' },
  },
  {
    path: 'user', loadChildren: () => import("../user/user.module").then(m => m.UserModule),
    canActivate: [HasRoleGuard],
    data: { role: 'User' },
  },
  { path: "RegisterUser", component: RegisterUserComponent, pathMatch: "full" },
  { path: "LoginUser", component: LoginUserComponent, pathMatch: "full" },
  {
    path: "RegisterAdmin",
    component: RegisterAdminComponent,
    canActivate: [HasRoleGuard],
    data: { role: 'Admin' },
    pathMatch: "full"
  },
  { path: "**", component: PageNotFoundComponent } //wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
