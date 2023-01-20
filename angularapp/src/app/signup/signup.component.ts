import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private signUpService:LoginServicesService) {}
  ngOnInit(): void {}

 registerForm = new FormGroup({
    userType: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    username: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
    mobileNumber: new FormControl('',[Validators.minLength(0),Validators.maxLength(10),]),
    password: new FormControl('',[Validators.required, Validators.minLength(7),Validators.maxLength(15)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(7),Validators.maxLength(15)])
  });

  get userType(){
    return this.registerForm.get('userType');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get username(){
    return this.registerForm.get('username');
  }
  get mobileNumber(){
    return this.registerForm.get('mobileNumber');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }
  register(user:any){
    this.signUpService.addUser(user).subscribe((result:any)=>{
      console.log("registered");
    });

  }

}
