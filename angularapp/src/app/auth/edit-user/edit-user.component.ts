import { Component, Input} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

editForm = new FormGroup({
  id: new FormControl(''),
  email: new FormControl(''),
  username: new FormControl(''),
  mobileNumber: new FormControl(''),
  password: new FormControl('')
});


updateUser(theId:any,theEmail:any,theUsername:any,theMobileNumber:any,thePassword:any){
        var user = {id:theId,email:theEmail,username:theUsername,
        mobileNumber:theMobileNumber,password:thePassword}
        this.userService.edit(user).subscribe((users:any)=>{
          console.log("Updated");
        });
        
        this.modalService.dismissAll();
        location.reload();

}

}

