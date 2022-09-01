import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email,Validators.maxLength(30)]),
    password:new FormControl("",[Validators.required]),
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

  register() {
    console.log(this.registrationForm.value);
      console.log("Registering admin...");
      this.adminService.registerAdmin(this.registrationForm.value).subscribe((res)=> {
        console.log("Successfully registered!");
        console.log(res);
      },(err)=> {
        console.log("Something went wrong!!");
      })
    }
}
