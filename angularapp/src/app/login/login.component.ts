import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private loginService:LoginServicesService){}

  found = false;
  users : any;

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('',[Validators.minLength(7), Validators.maxLength(15)])
  })

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  login(user:any){
      this.loginService.getUsers().subscribe((result:any)=>{
         for(let c = 0; c < result.length; c++){
              if(result[c].email == user.email && user.password == result[c].password){
                  this.found = true;
              }
         }
      });

      if(this.found) console.log("Logged In");
      else console.log("Not Found");

  }

}
