import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  result:any;
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.findAllMenu().subscribe((data)=> {
      this.result = data;
      console.log(this.result);
    },(err)=> {
      console.log(err);
      console.log("Unable to fetch Menu Details");
    })
  }

}
