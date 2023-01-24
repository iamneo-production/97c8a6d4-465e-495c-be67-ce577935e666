import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from './services/customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  admin: boolean = false;
  logged : boolean = false;

  constructor(private route:Router, private customerService:CustomerServiceService){

    if(localStorage.getItem('usertype') != null){
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
    this.route.navigate(['']);
  }

  signup(){
    this.route.navigate(['signup']);
  }

  logout(){
      localStorage.clear();
      this.customerService.logout();
      this.route.navigate(['login']);
  }

}
