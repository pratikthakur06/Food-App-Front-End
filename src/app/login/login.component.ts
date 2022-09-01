import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';
import { AuthService } from '../Services/auth.service';
import { BranchManagerService } from '../Services/branch-manager.service';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  logRole:any;
  constructor(private router:Router, private adminService: AdminService, private branchManagerService: BranchManagerService, private staffService: StaffService, private auth:AuthService) { }

  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    this.logRole = localStorage.getItem('role');
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(30)]),
    password: new FormControl("", [Validators.required])
  })

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  login() {
    console.log(this.loginForm.value);
    if (localStorage.getItem('role') == "admin") {
      this.adminService.loginAdmin(this.loginForm.value).subscribe((res) => {
        console.log(res);
        localStorage.setItem('isLoggedIn','true');
        this.router.navigate(['admin-details']);
      }, (err) => {
        console.log("Something went wrong!!!");
        console.log(err);
      })
    }
    else if (localStorage.getItem('role') == "branchManager") {
      this.branchManagerService.loginBranchManager(this.loginForm.value).subscribe((res) => {
        console.log(res);
        localStorage.setItem('isLoggedIn','true');
        this.router.navigate(['branchManager-details']);
      }, (err) => {
        console.log("Something went wrong!!!");
        console.log(err);
      })
    }
    else {
      this.staffService.loginStaff(this.loginForm.value).subscribe((res) => {
        console.log(res);
        localStorage.setItem('isLoggedIn','true');
        this.router.navigate(['foodOrder-details']);
      }, (err) => {
        console.log("Something went wrong!!!");
        console.log(err);
      })
    }
  }

}
