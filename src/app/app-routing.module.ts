import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddBranchManagerComponent } from './add-branch-manager/add-branch-manager.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddFoodOrderComponent } from './add-food-order/add-food-order.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { BranchManagerDetailsComponent } from './branch-manager-details/branch-manager-details.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditBranchManagerComponent } from './edit-branch-manager/edit-branch-manager.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { EditFoodOrderComponent } from './edit-food-order/edit-food-order.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { FoodOrderDetailsComponent } from './food-order-details/food-order-details.component';
import { AdminAuthGuard } from './Guards/admin-auth.guard';
import { AuthGuard } from './Guards/auth.guard';
import { BranchManagerAuthGuard } from './Guards/branch-manager-auth.guard';
import { StaffAuthGuard } from './Guards/staff-auth.guard';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginComponent } from './login/login.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { RegisterComponent } from './register/register.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin-details', component:AdminDetailsComponent, canActivate:[AuthGuard, AdminAuthGuard]},
  {path:'branch-details', component:BranchDetailsComponent, canActivate:[AuthGuard, AdminAuthGuard]},
  {path:'branchManager-details', component:BranchManagerDetailsComponent, canActivate:[AuthGuard, BranchManagerAuthGuard]},
  {path:'foodOrder-details', component:FoodOrderDetailsComponent, canActivate:[AuthGuard, StaffAuthGuard]},
  {path:'item-details', component:ItemDetailsComponent, canActivate:[AuthGuard, BranchManagerAuthGuard]},
  {path:'menu-details', component:MenuDetailsComponent, canActivate:[AuthGuard, BranchManagerAuthGuard]},
  {path:'staff-details', component:StaffDetailsComponent, canActivate:[AuthGuard, BranchManagerAuthGuard]},
  {path:'add-admin', component:AddAdminComponent, canActivate:[AuthGuard, AdminAuthGuard]},
  {path:'edit-admin/:id', component:EditAdminComponent, canActivate:[AuthGuard]},
  {path:'add-branch', component:AddBranchComponent, canActivate:[AuthGuard, AdminAuthGuard]},
  {path:'edit-branch/:id', component:EditBranchComponent, canActivate:[AuthGuard]},
  {path:'add-branchManager', component:AddBranchManagerComponent, canActivate:[AuthGuard, BranchManagerAuthGuard]},
  {path:'edit-branchManager/:id', component:EditBranchManagerComponent, canActivate:[AuthGuard]},
  {path:'add-staff', component:AddStaffComponent, canActivate:[AuthGuard, BranchManagerAuthGuard]},
  {path:'edit-staff/:id', component:EditStaffComponent, canActivate:[AuthGuard]},
  {path:'add-menu', component:AddMenuComponent, canActivate:[AuthGuard, BranchManagerAuthGuard]},
  {path:'edit-menu/:id', component:EditMenuComponent, canActivate:[AuthGuard]},
  {path:'add-item', component:AddItemComponent, canActivate:[AuthGuard, BranchManagerAuthGuard]},
  {path:'edit-item/:id', component:EditItemComponent, canActivate:[AuthGuard]},
  {path:'add-foodOrder', component:AddFoodOrderComponent, canActivate:[AuthGuard, StaffAuthGuard]},
  {path:'edit-foodOrder/:id', component:EditFoodOrderComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
