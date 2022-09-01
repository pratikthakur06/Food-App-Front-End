import { Component, OnInit } from '@angular/core';
import { BranchManagerService } from '../Services/branch-manager.service';

@Component({
  selector: 'app-branch-manager-details',
  templateUrl: './branch-manager-details.component.html',
  styleUrls: ['./branch-manager-details.component.css']
})
export class BranchManagerDetailsComponent implements OnInit {

  result:any;
  constructor(private branchManagerService:BranchManagerService) { }

  ngOnInit(): void {
    this.branchManagerService.findAllBranchManager().subscribe((data)=> {
      this.result = data;
      console.log(this.result);
    }, (err)=> {
      console.log(err);
      console.log("Unable to fetch Branch Manager Details");
    })
  }

}
