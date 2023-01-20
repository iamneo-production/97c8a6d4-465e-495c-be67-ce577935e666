import { Component, OnInit } from '@angular/core';

interface UserDetails
{
  email:string;
  username:string;
  mobileNo:string
}

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
searchUser:any;
users:any;

  constructor() { }

  ngOnInit(): void {
  }

}
