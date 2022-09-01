import { Component, OnInit } from '@angular/core';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  result:any;
  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
    this.staffService.findAllStaff().subscribe((data)=> {
      this.result = data;
      console.log(this.result);
    }, (err)=> {
      console.log(err);
      console.log("Unable to fetch Staff Details");
    })
  }

}
