import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-addon-funtionality',
  templateUrl: './addon-funtionality.component.html',
  styleUrls: ['./addon-funtionality.component.css']
})
export class AddonFuntionalityComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);
	}

}
