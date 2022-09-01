import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodOrderService } from '../Services/food-order.service';

@Component({
  selector: 'app-food-order-details',
  templateUrl: './food-order-details.component.html',
  styleUrls: ['./food-order-details.component.css']
})
export class FoodOrderDetailsComponent implements OnInit {

  result: any;
  errorMsg:any;
  error:any;
  constructor(private foodOrderService: FoodOrderService, private router:Router) { }

  ngOnInit(): void {
    this.foodOrderService.findAllFoodOrder().subscribe((data) => {
      this.result = data;
      console.log(this.result);
    }, (err) => {
      console.log(err);
      console.log("Unable to fetch Food Order Details");
    })
  }

  deleteFoodOrder(id: any) {
    this.foodOrderService.deleteFoodOrder(id).subscribe((res) => {
      console.log(res);
      window.alert("Food Order deleted successfully");
      this.router.navigate(['foodOrder-details']);
      // window.location.reload();  //It will reload the page

      this.foodOrderService.findAllFoodOrder().subscribe((data) => { // It will reload the data once after deleting without refreshing page
        this.result = data;
        console.log(this.result);

      })
    }, (err) => {
      console.log(err);
      this.error = err;
      this.errorMsg = err.message;
      console.log(this.errorMsg);
      window.alert("You are not authorized");
    })
  }
}
