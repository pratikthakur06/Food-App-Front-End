import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  result:any;
  selectedMenu:any;
  errorMsg:any;
  error:any;
  constructor(private menuService:MenuService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.menuService.findAllMenu().subscribe((data)=>{
      this.result=data;
      for(let r of this.result.t) {
        if(r.id==id) {
          this.selectedMenu=r;
          console.log(this.selectedMenu);
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
    branchManagerId: new FormControl("",[Validators.required])
  })

  get branchManagerId() {
    return this.updateForm.get("branchManagerId");
  }

  editMenu() {
    this.menuService.updateMenu(this.selectedMenu.id,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      window.alert("Menu updated successfully");
      this.router.navigate(['menu-details']);
    },(err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message;
      console.log(this.errorMsg);
    })
  }
}
