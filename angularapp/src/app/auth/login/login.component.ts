import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router,ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

 // Constructor
 constructor(private loginService:LoginService, private customerService:CustomerServiceService, private router: Router, private route: ActivatedRoute){
 }

 //User Exists field 
   userExists: boolean = false;

   loginForm = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)])
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
        for(let i in users){
          if(users[i].email == "admin@gmail.com" && users[i].password == "admin"){
            localStorage.setItem('usertype',"admin");
            this.userExists = true;
            this.customerService.login();
            console.log("found");
            this.router.navigate(['admin']);
            return
          }
          if(users[i].email == user.email && users[i].password == user.password){
            localStorage.setItem('usertype','user');
            this.userExists = true;
            this.customerService.login();
            console.log("fOUND");
            this.router.navigate(['home']);
            location.reload();
          }
        }
      });
  }

  signup(){
      this.router.navigate(['signup']);
  }

}
