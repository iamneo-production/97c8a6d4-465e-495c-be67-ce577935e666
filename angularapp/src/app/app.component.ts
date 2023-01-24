import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  
>>>>>>> 9e08a6970ae3cd563afff00ddf94d747e100bfae
=======
>>>>>>> 3d357351bf7abfb36a661702019fbff6d56da5bb
}
