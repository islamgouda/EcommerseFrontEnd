import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard } from 'src/has-role.guard';
import { LoginUserComponent } from './Authentication/login-user/login-user.component';
import { RegisterAdminComponent } from './Authentication/register-admin/register-admin.component';
import { RegisterUserComponent } from './Authentication/register-user/register-user.component';
import { BeaPartnerComponent } from './bea-partner/bea-partner.component';
import { CartComponent } from './cart/cart.component';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AllProductsComponent } from './home/all-products/all-products.component';
import { HomeComponent } from './home/home.component';
import { ProductsByCategoryComponent } from './home/products-by-category/products-by-category.component';
import { ProductsByPartnerComponent } from './home/products-by-partner/products-by-partner.component';
import { ProductsByPriceComponent } from './home/products-by-price/products-by-price.component';
import { ProductsByProductNameComponent } from './home/products-by-product-name/products-by-product-name.component';
import { ProductsBySubCategoryComponent } from './home/products-by-sub-category/products-by-sub-category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UProductsComponent } from './uproducts/uproducts.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [

 {path:"userdash",component:UserDashboardComponent}, //userdashboardto requests
  {path:"bePartner",component:BeaPartnerComponent},
  {path:"",redirectTo: '/home', pathMatch: 'full'}, //deafualt page
  {path:'home',component:HomeComponent,children:[
    {path:"",component:AllProductsComponent},
    {path:'AllProducts',component:AllProductsComponent},
    {path:'productsByCategory',component:ProductsByCategoryComponent},
    {path:'productsBySubCategory',component:ProductsBySubCategoryComponent},
    {path:'productsByPartner',component:ProductsByPartnerComponent},
    {path:'productsByProductName',component:ProductsByProductNameComponent},
    {path:'productsByPrice',component:ProductsByPriceComponent},
  ]},

  {path:'products',component:UProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'defaultLayout',component:DefaultLayoutComponent},
  {path:'customLayout',component:CustomLayoutComponent},
  {path:"navbar",loadChildren:()=>import("../navbar/navbar.module").then(x=>x.NavbarModule)},
  {path:"footer",loadChildren:()=>import("../footer/footer.module").then(x=>x.FooterModule)},
  {path:'admin',loadChildren:()=>import("../admin/admin.module").then(m=>m.AdminModule)},
  {path:"RegisterUser",component:RegisterUserComponent,pathMatch:"full"},
  {path:"LoginUser",component:LoginUserComponent,pathMatch:"full"},
  {path:"RegisterAdmin",
  component:RegisterAdminComponent,
  canActivate:[HasRoleGuard],
  data:{role:'Admin'},
  pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent} //wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
