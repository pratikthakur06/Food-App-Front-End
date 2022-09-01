import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  result:any;
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.findAllItem().subscribe((data)=> {
      this.result = data;
      console.log("this.result");
    },(err)=> {
      console.log(err);
      console.log("Unable to fetch Item Details");
    })
  }

}
