import { Component} from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
   
   // Declarations 
    user: any; 
    usernameTaken = false; 
    emailTaken = false;
   // Constructor
  constructor(private loginService:LoginserviceService) { }
  //Register Form
  registerForm = new FormGroup({
      userType:new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      username: new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+$'),Validators.minLength(5)]),
      mobileNumber: new FormControl('', [Validators.maxLength(10)]),
      password: new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(7)]),
      confirmPassword: new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(7)]) 
     });
     // Get methods for validation
     get userType()
     {     
        return this.registerForm.get('userType'); 
         }
      get email(){
         return this.registerForm.get('email'); 
         }
          get username()
        {      
          return this.registerForm.get('username'); 
        }
        get mobileNumber()
        {     
           return this.registerForm.get('mobileNumber');
              }
            get password()
              {      
                return this.registerForm.get('password'); 
                 }
              get confirmPassword()
              {      
                return this.registerForm.get('confirmPassword');
                }
                 // Confirm Password method
                 confirmPass(form:any)
                 {          
                   if(form.password == form.confirmPassword)
                   {            
                     return false; 
                         }
                          return true;
}

}
