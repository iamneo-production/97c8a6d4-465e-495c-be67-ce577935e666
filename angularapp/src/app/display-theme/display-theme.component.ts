import { Component } from '@angular/core';
import { ThemedisplayService } from '../services/themedisplay.service';

@Component({
  selector: 'app-display-theme',
  templateUrl: './display-theme.component.html',
  styleUrls: ['./display-theme.component.css']
})
export class DisplayThemeComponent  {
   display=true;
   theTheme:any;
   theme:any =[];
   themeExists:boolean = false;
  constructor(private displayThemeService:ThemedisplayService) { 
    this.displayThemeService.getTheme().subscribe((data:any)=>
    {
      this.theTheme = data;
      console.log(data);
    });
  }


  
}
