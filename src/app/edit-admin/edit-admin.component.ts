import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  result:any;
  selectedAdmin:any;
  errorMsg:any;
  error:any;
  constructor(private adminService:AdminService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.adminService.findAllAdmin().subscribe((data)=>{
      this.result=data;
      for(let r of this.result.t) {
        if(r.id==id) {
          this.selectedAdmin=r;
          console.log(this.selectedAdmin);
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
    email:new FormControl("",[Validators.required,Validators.email,Validators.maxLength(30)]),
    password:new FormControl("",[Validators.required]),
  })

  get name() {
    return this.updateForm.get("name");
  }

  get email() {
    return this.updateForm.get("email");
  }

  get password() {
    return this.updateForm.get("password");
  }

  editAdmin() {
    this.adminService.updateAdmin(this.selectedAdmin.id,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      window.alert("Admin updated successfully");
      this.router.navigate(['admin-details']);
    },(err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message;
      console.log(this.errorMsg);
    })
  }

}
