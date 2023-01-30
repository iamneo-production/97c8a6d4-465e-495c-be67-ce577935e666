import { Component} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOnsServiceService } from '../services/add-ons-service.service';


@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent  {

  theAddOns: any;

  constructor(private addonService:AddOnsServiceService, config: NgbModalConfig, private modalService: NgbModal) {
    this.addonService.view().subscribe((addons:any)=>{
      this.theAddOns = addons;
    });
   }

  open(content:any) {
    this.modalService.open(content);
  }

  addAddOn(theAddOnsName:any,theAddOnsPrice:any,theAddOnsImageuUrl:any){
      var addOn = {addOnName:theAddOnsName,addOnPrice:theAddOnsPrice,imageUrl:theAddOnsImageuUrl};

      this.addonService.add(addOn).subscribe((addons)=>{
        console.log("Added");
      });

      this.modalService.dismissAll();
      location.reload();
  }



}
