import { Component, OnInit } from '@angular/core';
import { BranchService } from '../Services/branch.service';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {

  result:any;
  constructor(private branchService:BranchService) { }

  ngOnInit(): void {
    this.branchService.findAllBranch().subscribe((data)=> {
      this.result=data;
      console.log(this.result);
    },(err)=> {
      console.log(err);
      console.log("Unable to fetch Branch details");
    })
  }

}
