import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent  {
  users:any;
    constructor(private loginService:LoginService){
      this.loginService.getUsers().subscribe((theUsers:any)=>{
        this.users = theUsers;
      });
    }
}
