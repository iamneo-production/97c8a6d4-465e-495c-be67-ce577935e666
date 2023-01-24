import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ThemeserviceService } from '../services/themeservice.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent  {
  themeForm = new FormGroup(
    {
      themeName:new FormControl('',[Validators && Validators.required]),
      imageUrl:new FormControl('',[Validators && Validators.required]),
      photographerDetails:new FormControl('',[Validators && Validators.required]),
      videographerDetails:new FormControl('',[Validators && Validators.required]),
      returnGift:new FormControl('',[Validators && Validators.required]),
      themeCost:new FormControl('',[Validators && Validators.required]),
    }
  );

  get themeName(){
    return this.themeForm.get('themeName');
  }
  get imageUrl(){
    return this.themeForm.get('imageUrl');
  }
  get photographerDetails(){
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
  
  constructor(private themedata: ThemeserviceService) { }

    getThemeForm(data:any){
      this.themedata.addtheme(data).subscribe((result:any)=>
      {
        console.log(result);
        alert("Theme added successfully!");
        this.themeForm.reset();
      });
    }

}
