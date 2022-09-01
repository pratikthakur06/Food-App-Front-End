import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role:any;

  constructor() { }

  isLoggedIn() {
    if(localStorage.getItem('isLoggedIn')=='true') {
      return true;
    }
    else {
      return false;
    }
  }

  getAdminRole() {
    if(localStorage.getItem('role')=="admin") {
      return true;
    }
    else {
      return false;
    }
  }

  getBranchManagerRole() {
    if(localStorage.getItem('role')=="branchManager") {
      return true;
    }
    else {
      return false;
    }
  }

  getStaffRole() {
    if(localStorage.getItem('role')=="staff") {
      return true;
    }
    else {
      return false;
    }
  }
}
