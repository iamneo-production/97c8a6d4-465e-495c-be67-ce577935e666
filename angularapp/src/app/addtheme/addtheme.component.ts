import { Component } from '@angular/core';
import { ThemeserviceService } from '../services/themeservice.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent  {

 constructor(private themeService:ThemeserviceService,config: NgbModalConfig, private modalService: NgbModal){}

 open(content:any) {
  this.modalService.open(content);
  }

  saveTheme(theThemeName:any,theImageUrl:any,thePhotographerDetails:any,theVideographerDetails:any,theReturnGift:any,theThemeCost:any,theThemeDescription:any){
      var theme = {themeName:theThemeName,imageUrl:theImageUrl,photographerDetails:thePhotographerDetails,
                  videographerDetails:theVideographerDetails,returnGift:theReturnGift,themeCost:theThemeCost,themeDescription:theThemeDescription};
      
      this.themeService.addtheme(theme).subscribe(()=>{
          console.log("added");
      });
      
      this.modalService.dismissAll();
      location.reload();
  }

}
