import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BranchManagerService } from '../Services/branch-manager.service';

@Component({
  selector: 'app-add-branch-manager',
  templateUrl: './add-branch-manager.component.html',
  styleUrls: ['./add-branch-manager.component.css']
})
export class AddBranchManagerComponent implements OnInit {

  constructor(private branchManagerService:BranchManagerService) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email,Validators.maxLength(30)]),
    password:new FormControl("",[Validators.required]),
    branchId: new FormControl("",[Validators.required])
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

  get branchId() {
    return this.registrationForm.get("branchId");
  }

  register() {
    console.log(this.registrationForm.value);
      console.log("Registering branch manager...");
      this.branchManagerService.registerBranchManager(this.registrationForm.value, this.registrationForm.value.branchId).subscribe((res)=> {
        console.log("Successfully registered!");
        console.log(res);
      },(err)=> {
        console.log("Something went wrong!!");
      })
    }
}
