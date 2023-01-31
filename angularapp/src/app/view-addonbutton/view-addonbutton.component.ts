import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-view-addonbutton',
  templateUrl: './view-addonbutton.component.html',
  styleUrls: ['./view-addonbutton.component.css']
})
export class ViewAddonbuttonComponent  {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
   }
   open(content:any) {
		this.modalService.open(content);
	}

}
