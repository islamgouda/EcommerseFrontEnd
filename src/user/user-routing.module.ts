import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

const routes: Routes = [
  {path:'userLayout',component:UserLayoutComponent,children:[
    {path:'',component:UserLandingPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
