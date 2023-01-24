import { Component, OnInit } from '@angular/core';
import { UserdisplayService } from 'src/app/services/userdisplay.service';

interface UserDetails
{
  email:string;
  username:string;
  mobileNo:string
}



@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

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
