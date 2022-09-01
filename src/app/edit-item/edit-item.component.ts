import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  result:any;
  selectedItem:any;
  errorMsg:any;
  error:any;
  constructor(private itemService:ItemService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.itemService.findAllItem().subscribe((data)=>{
      this.result=data;
      for(let r of this.result.t) {
        if(r.id==id) {
          this.selectedItem=r;
          console.log(this.selectedItem);
        }
      }
    }, (err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message;
      console.log(this.errorMsg);
    })
  }

  updateForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required]),
    type: new FormControl("",[Validators.required]),
    imageURL: new FormControl("",[Validators.required]),
    menuId: new FormControl("",[Validators.required])
  })

  get name() {
    return this.updateForm.get("name");
  }

  get description() {
    return this.updateForm.get("description");
  }

  get price() {
    return this.updateForm.get("price");
  }

  get type() {
    return this.updateForm.get("type");
  }

  get imageURL() {
    return this.updateForm.get("imageURL");
  }

  get menuId() {
    return this.updateForm.get("menuId");
  }

  editItem() {
    this.itemService.updateItem(this.selectedItem.id,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      window.alert("Staff updated successfully");
      this.router.navigate(['item-details']);
    },(err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message;
      console.log(this.errorMsg);
    })
  }
}
