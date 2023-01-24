import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';


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

}
