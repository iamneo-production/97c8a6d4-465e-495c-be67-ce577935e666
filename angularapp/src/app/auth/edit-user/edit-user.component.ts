import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent{

@Input() data:any;

user:any;

constructor(config: NgbModalConfig, private modalService: NgbModal, private userService:UserServiceService
  , private router: Router) {
  // customize default values of modals used by this component tree
  config.backdrop = 'static';
  config.keyboard = false;
}

open(content:any) {
  this.modalService.open(content);
}

update(theEmail:any,theId:any,theUsername:any,theMobile:any,thePassword:any){
    var user = {email:theEmail,username:theUsername,mobileNumber:theMobile,password:thePassword,id:theId};
    this.userService.edit(user).subscribe((users:any)=>{
      console.log("Updated");
    });
    
    this.modalService.dismissAll();
    location.reload();
}

}

