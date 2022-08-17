import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDiscountComponent } from 'src/admin/add-discount/add-discount.component';
import { AssignDisountToProductComponent } from 'src/admin/assign-disount-to-product/assign-disount-to-product.component';
import { DeleteDiscountComponent } from 'src/admin/delete-discount/delete-discount.component';
import { ShowDiscountsComponent } from 'src/admin/show-discounts/show-discounts.component';
import { AddUserAddressComponent } from './add-user-address/add-user-address.component';
import { PAddDiscountComponent } from './p-add-discount/p-add-discount.component';
import { PAddProductComponent } from './p-add-product/p-add-product.component';
import { PartnerLandingPageComponent } from './partner-landing-page/partner-landing-page.component';
import { PartnerLayoutComponent } from './partner-layout/partner-layout.component';

const routes: Routes = [
  {path:'partnerLayout',component:PartnerLayoutComponent,children:[
    {path:'',component:PartnerLandingPageComponent},
    {path:'addProduct',component:PAddProductComponent},
    {path:'addDiscount',component:PAddProductComponent},
    {path:'addDiscount',component:PAddDiscountComponent},
    {path:'AddNewUserAddress',component:AddUserAddressComponent},
    {path:'admin/addDiscount',component:AddDiscountComponent},
    {path:'admin/showAllDiscounts',component:ShowDiscountsComponent},
    {path:'admin/updateDiscount/:id',component:AddDiscountComponent},
    {path:'deleteDiscount/:id',component:DeleteDiscountComponent},
    {path:'admin/assignDisountToProduct',component:AssignDisountToProductComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
