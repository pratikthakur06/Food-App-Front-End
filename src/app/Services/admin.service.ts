import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  //Admin Registration
  registerAdmin(admin:any) {
    return this.http.post(`http://localhost:8080/admin`,admin);
  }
  //Admin Login
  loginAdmin(admin:any) {
    return this.http.post(`http://localhost:8080/adminLogin`,admin)
  }
  //Get all Admins
  findAllAdmin() {
    return this.http.get(`http://localhost:8080/admin`)
  }
  //Updating the Admin details
  updateAdmin(id:any,admin:any) {
    return this.http.put(`http://localhost:8080/admin?id=${id}`,admin);
  }
}
