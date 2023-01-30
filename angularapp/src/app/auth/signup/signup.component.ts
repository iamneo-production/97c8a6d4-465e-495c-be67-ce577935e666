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
users:any;
userTaken = false;

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
  this.user = {email:form.email, username: form.username, mobileNumber: form.mobileNumber, password: form.password};

  this.loginService.getUsers().subscribe((theUsers:any)=>{
            this.users = theUsers;
  });

  for(let i in this.users){
      if(this.users[i].email == this.user.email){
        this.userTaken = true;
      }
  }

  if(this.userTaken){
    alert("Oops! User Already exists, try another email");
  }
  else{
    var confirm : boolean = window.confirm("Do you want to submit this user.");
  console.log(confirm);

if(confirm){

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
}
