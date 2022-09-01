import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BranchManagerDetailsComponent } from './branch-manager-details/branch-manager-details.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { FoodOrderDetailsComponent } from './food-order-details/food-order-details.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { AddBranchManagerComponent } from './add-branch-manager/add-branch-manager.component';
import { EditBranchManagerComponent } from './edit-branch-manager/edit-branch-manager.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddFoodOrderComponent } from './add-food-order/add-food-order.component';
import { EditFoodOrderComponent } from './edit-food-order/edit-food-order.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAdminComponent,
    EditAdminComponent,
    AdminDetailsComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BranchManagerDetailsComponent,
    StaffDetailsComponent,
    BranchDetailsComponent,
    MenuDetailsComponent,
    ItemDetailsComponent,
    FoodOrderDetailsComponent,
    AddBranchComponent,
    EditBranchComponent,
    AddBranchManagerComponent,
    EditBranchManagerComponent,
    EditStaffComponent,
    AddStaffComponent,
    AddMenuComponent,
    EditMenuComponent,
    EditItemComponent,
    AddItemComponent,
    AddFoodOrderComponent,
    EditFoodOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
