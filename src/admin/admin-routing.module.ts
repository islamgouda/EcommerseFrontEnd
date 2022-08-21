import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAdminComponent } from 'src/app/Authentication/register-admin/register-admin.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddRoleToUserComponent } from './add-role-to-user/add-role-to-user.component';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AssignDisountToProductComponent } from './assign-disount-to-product/assign-disount-to-product.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { DeleteDiscountComponent } from './delete-discount/delete-discount.component';
import { DeletePartnerComponent } from './delete-partner/delete-partner.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DeleteSubCategoryComponent } from './delete-sub-category/delete-sub-category.component';
import { RemoveRolefromUserComponent } from './remove-rolefrom-user/remove-rolefrom-user.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { ShowDiscountsComponent } from './show-discounts/show-discounts.component';
import { ShowPartnersComponent } from './show-partners/show-partners.component';
import { ShowPendingProductsComponent } from './show-pending-products/show-pending-products.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowShipperComponent } from './show-shipper/show-shipper.component';
import { ShowSubCategoriesComponent } from './show-sub-categories/show-sub-categories.component';

const routes: Routes = [ 
  {path:'deleteDiscount/:id',component:DeleteDiscountComponent},
  {path:'updateDiscount/:id',component:AddDiscountComponent},
  {path:'adminLayout',component:AdminLayoutComponent,children:[
        {path:'',component:AdminLandingPageComponent},
        {path:'addNewDiscount',component:AddDiscountComponent},
        {path:'RegisterAdmin',component:RegisterAdminComponent},
        { path: 'addCategory', component: AddCategoryComponent },
        { path: 'addCategory/:id', component: AddCategoryComponent },
        { path: 'showCategories', component: ShowCategoriesComponent },
        { path: 'addSubCategory', component: AddSubCategoryComponent },
        { path: 'deleteCategory/:id', component: DeleteCategoryComponent },
        { path: 'addSubCategory/:id', component: AddSubCategoryComponent },
        { path: 'showSubCategories', component: ShowSubCategoriesComponent },
        { path: 'deleteSubCategories/:id', component: DeleteSubCategoryComponent },
        {path:'updateProduct/:id',component:AddProductComponent},
        {path:'deleteProduct/:id',component:DeleteProductComponent},

        {path:'addNewPartner',component:AddPartnerComponent},
        {path:'addNewPartner/:id',component:AddPartnerComponent},
        {path:'deletePartner/:id',component:DeletePartnerComponent},
        {path:'showAllPartners',component:ShowPartnersComponent},


        {path:'addDiscount',component:AddDiscountComponent},
        {path:'showAllDiscounts',component:ShowDiscountsComponent},
        
       
        {path:'assignDisountToProduct',component:AssignDisountToProductComponent},

        {path:'showallshippers',component:ShowShipperComponent},
        {path:'addshipper',component:AddShipperComponent},

        {path:'AddToRole',component:AddRoleToUserComponent},
        {path:'RemoveFromRole',component:RemoveRolefromUserComponent},

        {path:'showPendingProducts',component:ShowPendingProductsComponent},
        {path:'showProductDetails/:id',component:ShowProductDetailsComponent},


  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
