import { Component} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddonServiceService } from '../services/addon-service.service';
@Component({
  selector: 'app-addonbutton',
  templateUrl: './addonbutton.component.html',
  styleUrls: ['./addonbutton.component.css']
})
export class AddonbuttonComponent{
  constructor(config:NgbModalConfig, private modalService:NgbModal, private addOnService:AddonServiceService) {
    config.backdrop='static';
    config.keyboard=false;
   }

 open(content:any){
   this.modalService.open(content);
 }

add(theName,theprice,theimage){
    var addon= {name:theName,price:theprice,image:theimage};

    this.addOnService.addAddon(addon).subscribe((data:any)=>
    {
       console.log(data);
       addon = data;
    });
    this.modalService.dismissAll();
    location.reload();

}

}
