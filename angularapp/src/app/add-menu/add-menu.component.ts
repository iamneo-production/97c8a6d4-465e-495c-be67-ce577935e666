import { Component } from '@angular/core';
import { MenudataService } from '../services/menudata.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  active = 1;
  constructor(private menudata:MenudataService) { }
  
  getMenuData(data:any){
    this.menudata.additems(data).subscribe((result)=>
    {
   console.log(result);
   alert("Menu Item added successfully!!!");
    });
  }

}
