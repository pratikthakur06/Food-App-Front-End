import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) {}
  title = 'FoodApp';

  role:String = "";

  logAdmin() {
    this.role = "admin";
    localStorage.setItem('role','admin');
    //console.log(this.role);
    console.log(localStorage.getItem('role'));
    
  }

  logBranchManager() {
    // this.role = "branchManager";
    localStorage.setItem('role','branchManager');
    // console.log(this.role);
    console.log(localStorage.getItem('role'));
  }

  logStaff() {
    // this.role = "staff";
    localStorage.setItem('role','staff');
    // console.log(this.role);
    console.log(localStorage.getItem('role'));
  }

  isLoggedIn() {
    return localStorage.getItem('isLoggedIn');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  logout() {
    // this.role = "";
    //localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['home'])
    window.alert("You have successfully logged out!!");
  }
}
