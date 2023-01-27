import { Component} from '@angular/core';
import { MenudataService} from '../services/menudata.service';
@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.css']
})
export class ViewmenuComponent  {
  items:any;
  constructor(private menuService:MenudataService) {
    this.menuService.items().subscribe((data:any)=>
    {
      this.items = data;
    });
   }



}
