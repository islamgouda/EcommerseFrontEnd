import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipperLandingPageComponent } from './shipper-landing-page/shipper-landing-page.component';
import { ShipperLayoutComponent } from './shipper-layout/shipper-layout.component';
import { ShipperUpdateStateComponent } from './shipper-update-state/shipper-update-state.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';

const routes: Routes = [
  {path:'shipperLayout',component:ShipperLayoutComponent,children:[
    {path:'',component:ShipperLandingPageComponent},
    {path:'details',component:ShippingDetailsComponent},
    {path:'updateState/:id',component:ShipperUpdateStateComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
