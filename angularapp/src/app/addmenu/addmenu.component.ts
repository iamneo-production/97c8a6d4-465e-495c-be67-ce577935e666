import { Component} from '@angular/core';
import { MenudataService } from '../services/menudata.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent  {

    constructor(private menuService:MenudataService,config: NgbModalConfig, private modalService: NgbModal){}


    open(content:any) {
      this.modalService.open(content);
    }

    saveMenu(img:any,theItemName:any,theItemCatagory:any,thePrice:any){
        var menu = {imageUrl:img,itemName:theItemName,itemCategory:theItemCatagory,price:thePrice}

        this.menuService.additems(menu).subscribe((data:any)=>{
          console.log("added");
        });

        this.modalService.dismissAll();
        location.reload();
    }

}
