import { Component} from '@angular/core';
import { MenudataService } from '../services/menudata.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {

  items:any;
  constructor(private menudata:MenudataService) { }

  getMenuData(data:any){
  
    this.menudata.addMenu(data).subscribe((result:any)=>
    {
   console.log(result);
   
    });
  }
}
