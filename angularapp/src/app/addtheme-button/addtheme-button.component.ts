import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addtheme-button',
  templateUrl: './addtheme-button.component.html',
  styleUrls: ['./addtheme-button.component.css']
})
export class AddthemeButtonComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);
	}

}
