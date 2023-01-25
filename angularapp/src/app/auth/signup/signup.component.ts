import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent{

// Declarations
user: any;
usernameTaken = false;
emailTaken = false;

constructor(private loginService:LoginService, private router:Router){}

// Register Form
registerForm  = new FormGroup({
  userType: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required, Validators.email]),
  username: new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+$'),Validators.minLength(5)]),
  mobileNumber: new FormControl('', [Validators.maxLength(10)]),
  password: new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(5)]),
  confirmPassword: new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(5)])
});

// Get methods for validations
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

// Confirm Password method
confirmPass(form:any){
    if(form.password == form.confirmPassword){
      return false;
    }
    return true;
}

login(){
  this.router.navigate(['login']);
}

// Register Method
register(form:any)
{
  var confirm : boolean = window.confirm("Do you want to submit this user.");
  console.log(confirm);

if(confirm){
this.user = 
{email:form.email, username: form.username, mobileNumber: form.mobileNumber, password: form.password};

this.loginService.addUser(this.user).subscribe
(
  (users:any) => 
  {
      console.log(users);
      this.router.navigate(['login']);
  }
);
}  
}
}
