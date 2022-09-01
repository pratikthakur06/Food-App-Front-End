import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  //Get all Menu's
  findAllMenu() {
    return this.http.get(`http://localhost:8080/menu`);
  }
  //Menu Registration
  registerMenu(menu:any,branchManagerId:any) {
    return this.http.post(`http://localhost:8080/menu/${branchManagerId}`,menu);
  }
  //Update Menu Details
  updateMenu(id:any, menu:any) {
    return this.http.put(`http://localhost:8080/menu?id=${id}`,menu);
  }
}
