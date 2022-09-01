import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodOrderService } from '../Services/food-order.service';

@Component({
  selector: 'app-edit-food-order',
  templateUrl: './edit-food-order.component.html',
  styleUrls: ['./edit-food-order.component.css']
})
export class EditFoodOrderComponent implements OnInit {

  result:any;
  selectedFoodOrder:any;
  errorMsg:any;
  error:any;
  itemString:string="";
  constructor(private foodOrderService:FoodOrderService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.foodOrderService.findAllFoodOrder().subscribe((data)=>{
      this.result=data;
      for(let r of this.result.t) {
        if(r.id==id) {
          this.selectedFoodOrder=r;
          console.log(this.selectedFoodOrder);
          console.log(this.selectedFoodOrder.items);
          this.selectedFoodOrder.items.forEach((element: { id: any; }) => {
            console.log(element.id);
            this.itemString+=element.id + ",";
            
          });
          this.itemString=this.itemString.substring(0,this.itemString.length-1)
          console.log(this.itemString);
          this.selectedFoodOrder.itemId=this.itemString;
        }
      }
    }, (err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message;
      console.log(this.errorMsg);
    })
  }

  updateForm = new FormGroup({
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
    return this.updateForm.get("customerName");
  }

  get customerEmail() {
    return this.updateForm.get("customerEmail");
  }

  get customerPhoneNumber() {
    return this.updateForm.get("customerPhoneNumber");
  }

  get orderCreatedTime() {
    return this.updateForm.get("orderCreatedTime");
  }

  get orderDeliveredTime() {
    return this.updateForm.get("orderDeliveredTime");
  }

  get quantity() {
    return this.updateForm.get("quantity");
  }

  get status() {
    return this.updateForm.get("status");
  }

  get itemId() {
    return this.updateForm.get("itemId");
  }

  get staffId() {
    return this.updateForm.get("staffId");
  }

  editFoodOrder() {
    this.foodOrderService.updateFoodOrder(this.selectedFoodOrder.id, this.selectedFoodOrder.itemId,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      window.alert("Food Order updated successfully");
      this.router.navigate(['foodOrder-details']);
    },(err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message;
      console.log(this.errorMsg);
    })
  }
}
