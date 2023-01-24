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
  )
  constructor(private themedata: ThemeserviceService) { }

    getThemeForm(data:any){
      this.themedata.addtheme(data).subscribe((result:any)=>
      {
        console.log(result);
        alert("Theme added successfully!");
      });
    }

}
