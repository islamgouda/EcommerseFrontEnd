import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDiscountComponent } from 'src/admin/add-discount/add-discount.component';
import { AddProductComponent } from 'src/admin/add-product/add-product.component';
import { AssignDisountToProductComponent } from 'src/admin/assign-disount-to-product/assign-disount-to-product.component';
import { DeleteDiscountComponent } from 'src/admin/delete-discount/delete-discount.component';
import { ShowDiscountsComponent } from 'src/admin/show-discounts/show-discounts.component';
import { AddUserAddressComponent } from './add-user-address/add-user-address.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { PAddDiscountComponent } from './p-add-discount/p-add-discount.component';
import { PartnerLandingPageComponent } from './partner-landing-page/partner-landing-page.component';
import { PartnerLayoutComponent } from './partner-layout/partner-layout.component';
import { PendingProductsComponent } from './pending-products/pending-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'partnerLayout',component:PartnerLayoutComponent,children:[
    {path:'',component:PartnerLandingPageComponent},
    {path:'addProduct',component:AddProductComponent},
    {path:'PendingProducts',component:PendingProductsComponent},
    {path:'AllProducts',component:AllProductsComponent},
    {path:'addDiscount',component:PAddDiscountComponent},
    {path:'AddNewUserAddress',component:AddUserAddressComponent},
    {path:'admin/addDiscount',component:AddDiscountComponent},
    {path:'admin/showAllDiscounts',component:ShowDiscountsComponent},
    {path:'admin/updateDiscount/:id',component:AddDiscountComponent},
    {path:'deleteDiscount/:id',component:DeleteDiscountComponent},
    {path:'admin/assignDisountToProduct',component:AssignDisountToProductComponent},
    {path:'DeleteProduct/:id',component:DeleteProductComponent},
    {path:'UpdateProduct/:id',component:UpdateProductComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
