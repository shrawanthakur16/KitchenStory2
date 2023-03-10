import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
//import { AdditemsComponent } from '../additems/add-items';
import { AdminComponent } from '../admin/admin.component';
import { CartComponent } from '../cart/cart.component';
import { ChangepswdComponent } from '../changepswd/changepswd.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { HomeComponent } from '../home/home.component';
import { KichenitemsdupliComponent } from '../kichenitemsdupli/kichenitemsdupli.component';
import { KitchendetailComponent } from '../kitchendetail/kitchendetail.component';

import { KitchenitemsComponent } from '../kitchenitems/kitchenitems.component';
//import { LoginComponent } from '../login/login.component';
//import { PaymentComponent } from '../payment/payment.component';
//import { RegisterComponent } from 'src/register/register.component';
//import { SuccessComponent } from 'src/success/success.component';
//import { ViewitemsComponent } from 'src/viewitems/viewitems.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
    {path:'about',component:AboutusComponent},
    {path:'items1',component:KitchenitemsComponent},
    {path:'items',component:KichenitemsdupliComponent},
    {path:'items/:id',component:KitchendetailComponent},
    {path:'contact',component:ContactusComponent},
    // {path:'register',component:RegisterComponent},
    // {path:'login',component:LoginComponent},
    {path:'cart',component:CartComponent},
    {path:'',component:HomeComponent},
    {path:'admin',component:AdminComponent},
    // {path:'view',component:ViewitemsComponent},
    // {path:'additems',component:AdditemsComponent},
    {path:'changepwd',component:ChangepswdComponent},
    // {path:'payment',component:PaymentComponent},
    // {path:'success',component:SuccessComponent}
    //{path:'**',component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
