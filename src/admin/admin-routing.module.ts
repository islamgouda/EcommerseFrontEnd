import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { DeleteDiscountComponent } from './delete-discount/delete-discount.component';
import { DeletePartnerComponent } from './delete-partner/delete-partner.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DeleteSubCategoryComponent } from './delete-sub-category/delete-sub-category.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { ShowDiscountsComponent } from './show-discounts/show-discounts.component';
import { ShowPartnersComponent } from './show-partners/show-partners.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowSubCategoriesComponent } from './show-sub-categories/show-sub-categories.component';

const routes: Routes = [
  {path:'adminLayout',component:AdminLayoutComponent,children:[
        {path:'',component:AdminLandingPageComponent},
        {path:'addNewDiscount',component:AddDiscountComponent},
        { path: 'addCategory', component: AddCategoryComponent },
        { path: 'addCategory/:id', component: AddCategoryComponent },
        { path: 'showCategories', component: ShowCategoriesComponent },
        { path: 'addSubCategory', component: AddSubCategoryComponent },
        { path: 'deleteCategory/:id', component: DeleteCategoryComponent },
        { path: 'addSubCategory/:id', component: AddSubCategoryComponent },
        { path: 'showSubCategories', component: ShowSubCategoriesComponent },
        { path: 'deleteSubCategories/:id', component: DeleteSubCategoryComponent },
        {path:'addProduct',component:AddProductComponent},
        {path:'updateProduct/:id',component:AddProductComponent},
        {path:'showProducts',component:ShowProductsComponent},
        {path:'deleteProduct/:id',component:DeleteProductComponent},

        {path:'addNewPartner',component:AddPartnerComponent},
        {path:'addNewPartner/:id',component:AddPartnerComponent},
        {path:'deletePartner/:id',component:DeletePartnerComponent},
        {path:'showAllPartners',component:ShowPartnersComponent},


        {path:'addDiscount',component:AddDiscountComponent},
        {path:'showAllDiscounts',component:ShowDiscountsComponent},
        {path:'updateDiscount/:id',component:AddDiscountComponent},
        {path:'deleteDiscount/:id',component:DeleteDiscountComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
