import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    branchManagerId: new FormControl("",[Validators.required])
  })

  get branchManagerId() {
    return this.registrationForm.get("branchManagerId");
  }

  register() {
    console.log(this.registrationForm.value);
      console.log("Registering Menu...");
      this.menuService.registerMenu(this.registrationForm.value, this.registrationForm.value.branchManagerId).subscribe((res)=> {
        console.log("Successfully registered!");
        console.log(res);
      },(err)=> {
        console.log("Something went wrong!!");
      })
    }
}
