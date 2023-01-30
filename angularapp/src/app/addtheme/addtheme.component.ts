import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ThemeserviceService } from '../services/themeservice.service';
@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent  {
  themeForm= new FormGroup(
    {
      themeName:new FormControl('',[Validators.required]),
      imageUrl:new FormControl('',[Validators.required]),
      photographerDetails:new FormControl('',[Validators.required]),
      videographerDetails:new FormControl('',[Validators.required]),
      returnGift:new FormControl('',[Validators.required]),
      themeCost:new FormControl('',[Validators.required]),
      themeCostDescription:new FormControl('',[Validators.required])
    }
  );
  get ThemeName(){
    return this.themeForm.get('themeName');
  }
  get imageUrl(){
    return this.themeForm.get('imageUrl');
  }
  get Photographer(){
    return this.themeForm.get('photographerDetails');
  }
  get videographerDetails(){
    return this.themeForm.get('videographerDetails');
  }
  get returnGift(){
    return this.themeForm.get('returnGift');
  }
  get themeCost(){
    return this.themeForm.get('themeCost');
  }
  get themeDescription(){
    return this.themeForm.get('themeDescription');
  }
  constructor(private themedata:ThemeserviceService) { }
  
  addThemeData(data:any){
    this.themedata.addtheme(data).subscribe((result:any)=>
    {
       console.log(result);
       alert("Theme Added Successfully!!!");
    });
    
  }


}
