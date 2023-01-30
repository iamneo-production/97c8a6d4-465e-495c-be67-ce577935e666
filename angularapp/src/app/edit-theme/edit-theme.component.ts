import { Component,Input } from '@angular/core';
import { EditthemeservicesService } from '../services/editthemeservices.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css']
})

export class EditThemeComponent{
    @Input() data:any;

  constructor(private editThemeService:EditthemeservicesService,config: NgbModalConfig, private modalService: NgbModal) { }

  open(content:any) {
    this.modalService.open(content);
  }

  
  editTheme(id:any,theTheme:any,theImage:any,thePhotographer:any,theVideographer:any,theReturnGift:any,theThemeCost:any,theDescription:any){
      var theme = {id:id,themeName:theTheme,imageUrl:theImage,photographerDetails:thePhotographer,videographerDetails:theVideographer,returnGift:theReturnGift,themeCost:theThemeCost,themeDescription:theDescription}

      console.log(theme);
      this.editThemeService.updateTheme(theme).subscribe((themes:any)=>{
        console.log("Updated");
      });
          this.modalService.dismissAll();
          location.reload();
    }

    getId(theId:any){
      return theId;
    }

}
