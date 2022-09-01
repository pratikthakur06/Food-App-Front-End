import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }

  //Staff Registration
  registerStaff(staff:any,branchManagerId:any) {
    return this.http.post(`http://localhost:8080/staff/${branchManagerId}`,staff,branchManagerId);
  }
  //Staff Login
  loginStaff(staff:any) {
    return this.http.post(`http://localhost:8080/staffLogin`,staff)
  }
  //Get all Staffs
  findAllStaff() {
    return this.http.get(`http://localhost:8080/staff`);
  }
  //Update Staff Details
  updateStaff(id:any, staff:any) {
    return this.http.put(`http://localhost:8080/staff?id=${id}`,staff);
  }
}
