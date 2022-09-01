import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodOrderService } from '../Services/food-order.service';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-add-food-order',
  templateUrl: './add-food-order.component.html',
  styleUrls: ['./add-food-order.component.css']
})
export class AddFoodOrderComponent implements OnInit {

  items:any;
  constructor(private foodOrderService:FoodOrderService, private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    customerName: new FormControl("",[Validators.required]),
    customerEmail:new FormControl("",[Validators.required]),
    customerPhoneNumber:new FormControl("",[Validators.required]),
    orderCreatedTime:new FormControl("",[Validators.required]),
    orderDeliveredTime:new FormControl("",[Validators.required]),
    quantity:new FormControl("",[Validators.required]),
    status:new FormControl("",[Validators.required]),
    itemId:new FormControl("",[Validators.required]),
    staffId: new FormControl("",[Validators.required])
  })

  get customerName() {
    return this.registrationForm.get("customerName");
  }

  get customerEmail() {
    return this.registrationForm.get("customerEmail");
  }

  get customerPhoneNumber() {
    return this.registrationForm.get("customerPhoneNumber");
  }

  get orderCreatedTime() {
    return this.registrationForm.get("orderCreatedTime");
  }

  get orderDeliveredTime() {
    return this.registrationForm.get("orderDeliveredTime");
  }

  get quantity() {
    return this.registrationForm.get("quantity");
  }

  get status() {
    return this.registrationForm.get("status");
  }

  get itemId() {
    return this.registrationForm.get("itemId");
  }

  get staffId() {
    return this.registrationForm.get("staffId");
  }

  register() {
    console.log(this.registrationForm.value);
      console.log("Registering food order...");
      this.foodOrderService.registerFoodOrder(this.registrationForm.value, this.registrationForm.value.itemId , this.registrationForm.value.staffId).subscribe((res)=> {
        console.log("Successfully registered!");
        console.log(res);
        this.router.navigate(['foodOrder-details'])
      },(err)=> {
        console.log("Something went wrong!!");
      })
    }
}
