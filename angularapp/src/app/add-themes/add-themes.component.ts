import { Component} from '@angular/core';
import { ThemeserviceService} from '../services/themeservice.service';

@Component({
  selector: 'app-add-themes',
  templateUrl: './add-themes.component.html',
  styleUrls: ['./add-themes.component.css']
})
export class AddThemesComponent {
themes:any;
themdata:any;
  constructor(themedata:ThemeserviceService) { }

   getThemForm(data:any){
     this.themdata.addtheme(data).subscribe((result:any)=>{
       console.log(result);
       alert("Theme Added successfully!!!!");
     });
   }

 

}
