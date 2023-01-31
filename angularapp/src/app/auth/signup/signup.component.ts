import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from "@angular/material/snack-bar";

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

constructor(private loginService:LoginService, private router:Router, private snackbar:MatSnackBar){
  this.loginService.getUsers().subscribe((theUsers:any)=>{
    this.users = theUsers;
});
}

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
  
  for(let i in this.users){
      if(this.users[i].email == form.email){
        this.userTaken = true;
        break;
      }
  }
  if(this.userTaken){
    console.log("Oops user taken");
    this.snackbar.open("Email already exists",'',{
      duration: 4000,
      verticalPosition:'bottom'
    });
    return
  }
  else{
    var newUser = {email:form.email,username:form.username,mobileNumber:form.mobileNumber,password:form.password};
    this.loginService.addUser(newUser).subscribe((res)=>{
      console.log("added");
      this.snackbar.open("added",'',{
        duration: 4000,
        verticalPosition:'bottom'
      });
      });
    
  }
   
}
}
