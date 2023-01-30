import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOnsServiceService } from '../services/add-ons-service.service';

@Component({
  selector: 'app-edit-addon',
  templateUrl: './edit-addon.component.html',
  styleUrls: ['./edit-addon.component.css']
})
export class EditAddonComponent implements OnInit {
  @Input() data:any;

  constructor(private addonService:AddOnsServiceService,config: NgbModalConfig, private modalService: NgbModal) { }
  open(content:any) {
    this.modalService.open(content);
  }
  ngOnInit(): void {
  }

  editAddon(theId:any,theImageUrl:any,theAddOnName:any,theAddOnPrice:any){
      var addon = {id:theId,imageUrl:theImageUrl,addOnName:theAddOnName,addOnPrice:theAddOnPrice};

     this.addonService.edit(addon).subscribe((addons:any)=>{
       console.log("updated");
     });

     this.modalService.dismissAll();
     location.reload();

  }

}
