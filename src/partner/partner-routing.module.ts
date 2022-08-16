import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAddDiscountComponent } from './p-add-discount/p-add-discount.component';
import { PAddProductComponent } from './p-add-product/p-add-product.component';
import { PartnerLandingPageComponent } from './partner-landing-page/partner-landing-page.component';
import { PartnerLayoutComponent } from './partner-layout/partner-layout.component';

const routes: Routes = [
  {path:'partnerLayout',component:PartnerLayoutComponent,children:[
    {path:'',component:PartnerLandingPageComponent},
    {path:'addProduct',component:PAddProductComponent},
    {path:'addDiscount',component:PAddProductComponent},
    {path:'addDiscount',component:PAddDiscountComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
