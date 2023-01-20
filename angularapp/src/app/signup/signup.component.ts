import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:LoginServicesService) {}
  ngOnInit(): void {}

 signupForm = new FormGroup({
    userType: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    username: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
    mobileNumber: new FormControl('',[Validators.minLength(0),Validators.maxLength(10),]),
    password: new FormControl('',[Validators.required, Validators.minLength(7),Validators.maxLength(15)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(7),Validators.maxLength(15)])
  });

  get userType(){
    return this.signupForm.get('userType');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get username(){
    return this.signupForm.get('username');
  }
  get mobileNumber(){
    return this.signupForm.get('mobileNumber');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get confirmPassword(){
    return this.signupForm.get('confirmPassword');
  }
  register(user:any){
    this.signupService.addUser(user).subscribe((result:any)=>{
      console.log("registered");
    });
  }

}
