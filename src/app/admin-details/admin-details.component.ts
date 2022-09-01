import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  result:any;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.findAllAdmin().subscribe((data)=> {
      this.result=data;
      console.log(this.result);
    }, (err)=> {
      console.log(err);
      console.log("Unable to fetch the Admin details");
    })
  }

}
