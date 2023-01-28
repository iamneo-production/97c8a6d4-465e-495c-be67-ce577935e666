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

update(theId:any,theEmail:any,theUsername:any,mobile:any,thePassword:any){
    var user = {id:theId,email:theEmail,username:theUsername,mobileNumber:mobile,password:thePassword}
    this.userService.edit(user).subscribe((result:any)=>{
      console.log("updated");
      this.router.navigate(['displayuser']);
    });
}

}

