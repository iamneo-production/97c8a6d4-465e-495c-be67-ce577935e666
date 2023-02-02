import { Component, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenudataService } from '../services/menudata.service';
@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent  {

@Input() data:any;

  constructor(private menuService:MenudataService,config: NgbModalConfig, private modalService: NgbModal) { }
  
  open(content:any) {
    this.modalService.open(content);
  }

  editMenu(theId:any,theImageUrl:any,theItemName:any,theItemCategory:any,thePrice:any){
    var menu = {id:theId,Image:theImageUrl,itemName:theItemName,itemCategory:theItemCategory,price:thePrice};

    this.menuService.updateitems(menu).subscribe((menu:any)=>{
      console.log("updated");
    });

    this.modalService.dismissAll();
    location.reload();
  }


}
