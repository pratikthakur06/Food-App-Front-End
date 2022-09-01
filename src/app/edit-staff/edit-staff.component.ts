import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  result:any;
  selectedStaff:any;
  errorMsg:any;
  error:any;
  constructor(private staffService:StaffService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.staffService.findAllStaff().subscribe((data)=>{
      this.result=data;
      for(let r of this.result.t) {
        if(r.id==id) {
          this.selectedStaff=r;
          console.log(this.selectedStaff);
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
    email: new FormControl("",[Validators.required,Validators.email,Validators.maxLength(30)]),
    password: new FormControl("",[Validators.required]),
    branchManagerId: new FormControl("",[Validators.required])
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

  get branchManagerId() {
    return this.updateForm.get("branchManagerId");
  }

  editStaff() {
    this.staffService.updateStaff(this.selectedStaff.id,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      window.alert("Staff updated successfully");
      this.router.navigate(['staff-details']);
    },(err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message;
      console.log(this.errorMsg);
    })
  }
}
