import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UProductsComponent } from './uproducts/uproducts.component';

const routes: Routes = [
  {path:"",component:HomeComponent}, //deafualt page
  {path:'home',component:HomeComponent},
  {path:'products',component:UProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'defaultLayout',component:DefaultLayoutComponent},
  {path:'customLayout',component:CustomLayoutComponent},
  {path:"navbar",loadChildren:()=>import("../navbar/navbar.module").then(x=>x.NavbarModule)},
  {path:"footer",loadChildren:()=>import("../footer/footer.module").then(x=>x.FooterModule)},
  {path:'admin',loadChildren:()=>import("../admin/admin.module").then(m=>m.AdminModule)},
  {path:"**",component:PageNotFoundComponent} //wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
