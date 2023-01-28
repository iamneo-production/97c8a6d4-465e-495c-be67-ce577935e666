import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddonServiceService } from '../services/addon-service.service';
@Component({
  selector: 'app-addon-form',
  templateUrl: './addon-form.component.html',
  styleUrls: ['./addon-form.component.css']
})
export class AddonFormComponent {
  addonForm = new FormGroup(
 {
AddOnsName:new FormControl('',[Validators.required]),
AddOnsPrice:new FormControl('',[Validators.required ]),
AddOnsImageUrl:new FormControl('',[Validators.required])
 });
 get AddOnsName(){
   return this.addonForm.get('AddOnsName');
 }
 get AddOnsPrice(){
   return this.addonForm.get('AddOnsPrice');
 }
 get AddOnsImageUrl(){
   return this.addonForm.get('AddOnsImageUrl');
 }


  constructor(private AddonService:AddonServiceService) { }
  
  getAddonSata(data:any){
    this.AddonService.addAddon(data).subscribe((result)=>
    {
      console.log(result);
      this.addonForm.reset();
      
    });
  }

 
}
