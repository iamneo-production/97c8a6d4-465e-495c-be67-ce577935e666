import { Component, OnInit, Input } from '@angular/core';
import { AddOnsServiceService } from '../services/add-ons-service.service';

@Component({
  selector: 'app-delete-addon',
  templateUrl: './delete-addon.component.html',
  styleUrls: ['./delete-addon.component.css']
})
export class DeleteAddonComponent{
@Input() data:any;
  constructor(private addonService: AddOnsServiceService) { }


  delete(){
    var confirm = window.confirm("Confirm if you want to delete theme?");
    if(confirm){
      this.addonService.delete(this.data).subscribe((theme:any)=>
      {
      console.log("deleted");
      });
      location.reload();
    }
  }

}
