import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required]),
    price:new FormControl("",[Validators.required]),
    type:new FormControl("",[Validators.required]),
    imageURL:new FormControl("",[Validators.required]),
    menuId: new FormControl("",[Validators.required])
  })

  get name() {
    return this.registrationForm.get("name");
  }

  get description() {
    return this.registrationForm.get("description");
  }

  get price() {
    return this.registrationForm.get("price");
  }

  get type() {
    return this.registrationForm.get("type");
  }

  get imageURL() {
    return this.registrationForm.get("imageURL");
  }

  get menuId() {
    return this.registrationForm.get("menuId");
  }

  register() {
    console.log(this.registrationForm.value);
      console.log("Registering item...");
      this.itemService.registerItem(this.registrationForm.value, this.registrationForm.value.menuId).subscribe((res)=> {
        console.log("Successfully registered!");
        console.log(res);
      },(err)=> {
        console.log("Something went wrong!!");
      })
    }
}
