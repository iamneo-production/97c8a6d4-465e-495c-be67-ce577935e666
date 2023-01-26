import { Component } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { ThemeserviceService } from '../services/themeservice.service';

@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent  {

  themeform = new FormGroup(
    {
      themeName:new FormControl('',[Validators.required]),
      imageUrl:new FormControl('',[Validators.required]),
      photographerDetails:new FormControl('',[Validators.required]),
      videographerDetails:new FormControl('',[Validators.required]),
      returnGift:new FormControl('',[Validators.required]),
      themeCost:new FormControl('',[Validators.required]),
      themeDescription:new FormControl('',[Validators.required])
    }
  );

  get themeName(){
    return this.themeform.get('themeName');
  }
  get imageUrl(){
    return this.themeform.get('imageUrl');
  }
  get photographerDetails(){
    return this.themeform.get('photographerDetails');
  }
  get videographerDetails(){
    return this.themeform.get('videographerDetails');
  }
  get returnGift(){
    return this.themeform.get('returnGift');
  }
  get themeCost(){
    return this.themeform.get('themeCost');
  }
  get themeDescription(){
    return this.themeform.get('themeDescription');
  }
  
  constructor(private themedata: ThemeserviceService) { }

    getThemeForm(data:any){
      this.themedata.addtheme(data).subscribe((result:any)=>
      {
        console.log(result);
        alert("Theme added successfully!");
        this.themeform.reset();
      });
    }


}
