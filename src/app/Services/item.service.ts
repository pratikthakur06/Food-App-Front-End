import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }
  //Get all Items
  findAllItem() {
    return this.http.get(`http://localhost:8080/item`);
  }
  //Register Item
  registerItem(item:any, menuId:any) {
    return this.http.post(`http://localhost:8080/item/${menuId}`, item);
  }
  //Update Item
  updateItem(id:any, item:any) {
    return this.http.put(`http://localhost:8080/item?id=${id}`,item);
  }
}
