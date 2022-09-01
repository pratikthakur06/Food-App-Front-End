import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  result:any;
  selectedBranch:any;
  errorMsg:any;
  error:any;
  constructor(private branchService:BranchService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.branchService.findAllBranch().subscribe((data)=>{
      this.result=data;
      for(let r of this.result.t) {
        if(r.id==id) {
          this.selectedBranch=r;
          console.log(this.selectedBranch);
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
    address: new FormControl("",[Validators.required]),
    phoneNumber: new FormControl("",[Validators.required]),
    adminId: new FormControl("",[Validators.required])
  })

  get name() {
    return this.updateForm.get("name");
  }

  get email() {
    return this.updateForm.get("email");
  }

  get address() {
    return this.updateForm.get("address");
  }

  get phoneNumber() {
    return this.updateForm.get("phoneNumber");
  }

  get adminId() {
    return this.updateForm.get("adminId");
  }

  editBranch() {
    this.branchService.updateBranch(this.selectedBranch.id,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      window.alert("Branch updated successfully");
      this.router.navigate(['branch-details']);
    },(err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message;
      console.log(this.errorMsg);
    })
  }
}
