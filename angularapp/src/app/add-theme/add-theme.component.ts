import { Component } from '@angular/core';
import { ThemeserviceService } from '../services/themeservice.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent  {

  constructor(private themedata: ThemeserviceService) { }

    getThemeForm(data:any){
      this.themedata.addtheme(data).subscribe((result:any)=>
      {
        console.log(result);
        alert("Theme added successfully!");
      });
    }

}
