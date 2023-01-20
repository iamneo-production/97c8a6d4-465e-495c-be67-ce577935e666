import { Component } from '@angular/core';
<<<<<<< HEAD
import { UserService } from './user.service';
import {FormControl,FormGroup} from '@angular/forms';

=======
>>>>>>> 6a932961e1b5d1f9fb8b12a2ba60822d432d970b

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
<<<<<<< HEAD

  constructor(private userdata: UserService) {}

  myForm = new FormGroup({
    id: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')

  });

  get id(){
      return this.myForm.get('id');
  }
  get username(){
    return this.myForm.get('username');
  }
  get password(){
  return this.myForm.get('password');
  }

    delete(item,any){
      alert(" Are You Sure You Want To Delete User ?");
      this.userdata.deleteUser(item).subscribe((user:any)=>{
        console.log(user);

      });
}
=======
>>>>>>> 6a932961e1b5d1f9fb8b12a2ba60822d432d970b
}
