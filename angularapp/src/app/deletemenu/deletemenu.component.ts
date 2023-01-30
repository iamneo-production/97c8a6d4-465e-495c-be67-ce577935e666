import { Component, Input, OnInit } from '@angular/core';
import { MenudataService} from '../services/menudata.service';
@Component({
  selector: 'app-deletemenu',
  templateUrl: './deletemenu.component.html',
  styleUrls: ['./deletemenu.component.css']
})
export class DeletemenuComponent implements OnInit {
@Input() data:any;
  constructor(private menuService:MenudataService) { }

  ngOnInit(): void {
  }
  deletemenu(){
    var confirm = window.confirm("confirm if you want to delete Food Menu");
    if(confirm){
      this.menuService.deleteitems(this.data).subscribe((menu:any)=>
      {
        console.log("deleted");
      });
      location.reload();
    }
  }

}
