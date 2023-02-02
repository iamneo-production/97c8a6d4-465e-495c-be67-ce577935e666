import { Component, OnInit } from '@angular/core';
import { UserDisplayService } from 'src/app/services/user-display.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  users: any;
  constructor(private userDisplayService:UserDisplayService){
    this.userDisplayService.users().subscribe((data:any)=>{
      this.users = data;
  });
  }
  
  ngOnInit(): void {
  }
  }
