import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserPaymentHistoryComponent } from './user-payment-history/user-payment-history.component';
import { UserShippingComponent } from './user-shipping/user-shipping.component';

const routes: Routes = [
  {path:'userLayout',component:UserLayoutComponent,children:[
    {path:'',component:UserLandingPageComponent},
    {path:'userPaymentHistory',component:UserPaymentHistoryComponent},
    {path:'userShipping',component:UserShippingComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
