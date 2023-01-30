import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from './services/admin-service.service';
import { CustomerServiceService } from './services/customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  admin: boolean = false;
  logged : boolean = false;
  customer: boolean = false;

  constructor(private route:Router, private customerService:CustomerServiceService, private adminService:AdminServiceService){

    if(localStorage.getItem("usertype") != null){
      
      console.log(localStorage.getItem("usertype"));

        if(localStorage.getItem('usertype') == "admin"){
          this.admin = true;
          this.logged = true;
        }
        else{
          this.logged = true;
        }
    }
  }

  login(){
    this.route.navigate(['login']);
  }

  signup(){
    this.route.navigate(['signup']);
  }

  logout(){
    if(localStorage.getItem('usertype') == "admin"){
          localStorage.clear();
          this.adminService.logout();
          this.route.navigate(['login']);
          location.reload();
    }
    else if(localStorage.getItem('usertype') == "user"){
         localStorage.clear();
         this.customerService.logout();
         this.route.navigate(['login']);
         location.reload();
    }
  }

}
