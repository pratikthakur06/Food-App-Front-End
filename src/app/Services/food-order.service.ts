import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodOrderService {

  constructor(private http:HttpClient) { }
  //Get all Food Orders
  findAllFoodOrder() {
    return this.http.get(`http://localhost:8080/foodOrder`);
  }
  //Register Food Order
  registerFoodOrder(foodOrder:any,itemId:any,staffId:any) {
    return this.http.post(`http://localhost:8080/foodOrder?items=${itemId}&staffId=${staffId}`,foodOrder);
  }
  //Update Food Order
  updateFoodOrder(id:any, itemId:any, foodOrder:any) {
    return this.http.put(`http://localhost:8080/foodOrder?items=${itemId}&id=${id}`,foodOrder);
  }
  //Delete Food Order
  deleteFoodOrder(id:any) {
    return this.http.delete(`http://localhost:8080/foodOrder/${id}`);
  }
}
