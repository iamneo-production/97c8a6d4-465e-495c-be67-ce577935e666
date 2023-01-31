import { Component } from '@angular/core';
import { AddOnsServiceService } from '../services/add-ons-service.service';
@Component({
  selector: 'app-view-addon',
  templateUrl: './view-addon.component.html',
  styleUrls: ['./view-addon.component.css']
})
export class ViewAddonComponent {
theAddons:any;
  constructor(private AddonData:AddOnsServiceService) {
    this.AddonData.view().subscribe((result)=>{
     this.theAddons = result;
    });
   
   }



}
