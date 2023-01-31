import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Constructor
  constructor(private loginService: LoginService, private customerService: CustomerServiceService,
    private router: Router, private adminService: AdminServiceService) {
  }

  //User Exists field 
  userExists: boolean = false;
  admin: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
  });

  // Get Methods
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  // Login Method
  login(user: any) {
    this.loginService.getUsers().subscribe((users: any) => {
      let loggedIn:any;
      for (let i in users) {
        if (users[i].email == user.email && users[i].password == user.password) {
          loggedIn = users[i];

          if (loggedIn.password == 'admin')
           {
            localStorage.setItem("usertype", "admin");
            this.admin = true;
            this.adminService.login();
            this.router.navigate(['admin']);
            return
          } 
          else {

            localStorage.setItem("usertype", "user");
            sessionStorage.setItem("userid",String(users[i].id));
            this.userExists = true;
            this.customerService.login();
            this.router.navigate(['home']);
            return
          }
        }
      }

      if (this.admin == false || this.userExists == false) {
        alert("This user does not exist. Register instead.");
        this.router.navigate(['login']);
      }
    });
  }

  signup() {
    this.router.navigate(['signup']);
  }

}
