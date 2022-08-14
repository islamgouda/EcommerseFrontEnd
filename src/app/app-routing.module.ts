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
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UProductsComponent } from './uproducts/uproducts.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"",component:HomeComponent}, //deafualt page
  {path:"userdash",component:UserDashboardComponent}, //userdashboardto requests
  {path:"bePartner",component:BeaPartnerComponent},
  {path:'home',component:HomeComponent},
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
