import { Component, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent{

@Input() data:any;

  constructor(private userService:UserServiceService, private router: Router){}

  editForm = new FormGroup({
    id: new FormControl(''),
    username: new FormControl('',[Validators.pattern('[a-z A-Z]')]),
    email: new FormControl('',[Validators.email]),
    password: new FormControl('',[Validators.minLength(5),Validators.maxLength(15)])
  });

  get id(){
    return this.editForm.get('id');
  }
  get username(){
    return this.editForm.get('username');
  }
  get email(){
    return this.editForm.get('email');
  }
  get password(){
    return this.editForm.get('password');
  }

  editUser(user:any){
    var confirm = window.confirm("Confirm If you want to update");
    if(confirm){
      this.userService.edit(user).subscribe((users:any)=>{
          this.router.navigate(['displayuser']);
          location.reload();
      });
    }
   
  }

}

