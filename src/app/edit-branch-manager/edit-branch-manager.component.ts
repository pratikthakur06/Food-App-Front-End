import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchManagerService } from '../Services/branch-manager.service';

@Component({
  selector: 'app-edit-branch-manager',
  templateUrl: './edit-branch-manager.component.html',
  styleUrls: ['./edit-branch-manager.component.css']
})
export class EditBranchManagerComponent implements OnInit {

  result:any;
  selectedBranchManager:any;
  errorMsg:any;
  error:any;
  constructor(private branchManagerService:BranchManagerService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.branchManagerService.findAllBranchManager().subscribe((data)=>{
      this.result=data;
      for(let r of this.result.t) {
        if(r.id==id) {
          this.selectedBranchManager=r;
          console.log(this.selectedBranchManager);
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
    branchId: new FormControl("",[Validators.required])
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

  get branchId() {
    return this.updateForm.get("branchId");
  }

  editBranchManager() {
    this.branchManagerService.updateBranchManager(this.selectedBranchManager.id,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      window.alert("Branch Manager updated successfully");
      this.router.navigate(['branchManager-details']);
    },(err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message;
      console.log(this.errorMsg);
    })
  }
}
