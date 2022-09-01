import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email,Validators.maxLength(30)]),
    password:new FormControl("",[Validators.required]),
    branchManagerId: new FormControl("",[Validators.required])
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

  get branchManagerId() {
    return this.registrationForm.get("branchManagerId");
  }

  register() {
    console.log(this.registrationForm.value);
      console.log("Registering staff...");
      this.staffService.registerStaff(this.registrationForm.value, this.registrationForm.value.branchManagerId).subscribe((res)=> {
        console.log("Successfully registered!");
        console.log(res);
      },(err)=> {
        console.log("Something went wrong!!");
      })
    }
}
