import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  found : boolean = false;
  constructor(private login:LoginService){}

  loginForm = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12), Validators.pattern('[a-z A-Z 1-9]+$')]),

    });
    get email()
    {
      return this.loginForm.get('email');
    }

    get password()
    {
      return this.loginForm.get('password');
    }
    loginUser(user:any)
    {
        this.login.getUsers().subscribe((users:any)=>{
          for(let c = 0; c < users.length; c++){
            if(users[c].username == user.username == users[c].password == user.password){
              this.found = true;
            }
          }
        });

        if(this.found) alert("Logged In");
        else alert("Not Successful");
    }




}
