import { Component, OnInit } from '@angular/core';
import { UserDisplayService } from 'src/app/services/user-display.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  users: any;
  theUser:any = [];
  editClicked = false;
  
  constructor(private userService:UserDisplayService){
    this.userService.users().subscribe((data:any)=>{
      this.users = data;
  });
  }

  edit(user:any){
    this.editClicked = true;
      this.theUser.push(user);
  }
  
  ngOnInit(): void {
  }

}
