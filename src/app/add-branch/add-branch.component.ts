import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '../Services/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(private branchService:BranchService) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email,Validators.maxLength(30)]),
    address:new FormControl("",[Validators.required]),
    phoneNumber:new FormControl("",[Validators.required]),
    adminId: new FormControl("",[Validators.required])
  })

  get name() {
    return this.registrationForm.get("name");
  }

  get email() {
    return this.registrationForm.get("email");
  }

  get address() {
    return this.registrationForm.get("address");
  }

  get phoneNumber() {
    return this.registrationForm.get("phoneNumber");
  }

  get adminId() {
    return this.registrationForm.get("adminId");
  }

  register() {
    console.log(this.registrationForm.value);
      console.log("Registering branch...");
      this.branchService.registerBranch(this.registrationForm.value, this.registrationForm.value.adminId).subscribe((res)=> {
        console.log("Successfully registered!");
        console.log(res);
      },(err)=> {
        console.log("Something went wrong!!");
      })
    }
}