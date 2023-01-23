import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router,ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 // Constructor
 constructor(private loginService:LoginService, private router: Router, private route: ActivatedRoute){}

 //User Exists field 
   userExists: boolean = false;

   loginForm = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(15)])
   });

   // Get Methods
   get email(){
     return this.loginForm.get('email');
   }
   get password(){
     return this.loginForm.get('password');
   }
    // Login Method
    login(user:any){
      this.loginService.getUsers().subscribe((users:any)=>{
        for(let i = 0; i < users.length; i++){
          // Check if user exists
          if(users[i].email == user.email && users[i].password == user.password){
            this.userExists = true;
            console.log("found");
          }
        }
      });
  }

  register(){
      this.router.navigate(['signup']);
  }

}
