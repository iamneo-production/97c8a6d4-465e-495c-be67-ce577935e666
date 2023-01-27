import { Component, OnInit } from '@angular/core';
import { UserdisplayService } from '../services/userdisplay.service';

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

  constructor(private userdisplay:UserdisplayService) 
  { 
    userdisplay.users().subscribe((data:any) =>
    {
      console.log(data);
      this.users=data;
    })
  }
  
  ngOnInit(): void {
  }

  getUserFormData(data:any)
  {
    this.userdisplay.saveUsers(data).subscribe((result:any) =>
    {
      console.log(result);
    })
  }


}
