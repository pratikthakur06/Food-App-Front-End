import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';
import { BranchManagerService } from '../Services/branch-manager.service';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private adminService:AdminService, private branchManagerService:BranchManagerService, private staffService:StaffService) { }

  selectedType = "";
  roleType = "";

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.roleType=this.selectedType;
  }

  registrationForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email,Validators.maxLength(30)]),
    password:new FormControl("",[Validators.required]),
    role:new FormControl("",[Validators.required]),
    branchId:new FormControl("",[Validators.required]),
    branchManagerId:new FormControl("",[Validators.required])
  })

  get name() {
    return this.registrationForm.get("name");
  }

  get email() {
    return this.registrationForm.get("email");
  }

  get password() {
    return this.registrationForm.get("password");
  }

  get role() {
    return this.registrationForm.get("role");
  }

  get branchId() {
    return this.registrationForm.get("branchId");
  }

  get branchManagerId() {
    return this.registrationForm.get("branchManagerId");
  }

  onChange(event:any) {
    console.log( event.target.value);
    this.selectedType = event.target.value;
  }

  register() {
    console.log(this.registrationForm.value);
    if(this.roleType=="admin") {
      console.log("Registering admin...");
      this.adminService.registerAdmin(this.registrationForm.value).subscribe((res)=> {
        console.log("Successfully registered!");
        console.log(res);
      },(err)=> {
        console.log("Something went wrong!!");
        
      })
    }
    else if(this.roleType=="branchManager") {
      console.log("Registering branch manager with branch id: "+this.registrationForm.value.branchId);
      this.branchManagerService.registerBranchManager(this.registrationForm.value,this.registrationForm.value.branchId).subscribe((res)=> {
        console.log(res);
      },(err)=> {
        console.log("Something went wrong!!");
        
      })
    }
    else {
      console.log("Registering staff with branch manager id: "+this.registrationForm.value.branchManagerId);
      this.staffService.registerStaff(this.registrationForm.value,this.registrationForm.value.branchManagerId).subscribe((res)=> {
        console.log(res);
      },(err)=> {
        console.log("Something went wrong!!");
        
      })
    }
  }

}
