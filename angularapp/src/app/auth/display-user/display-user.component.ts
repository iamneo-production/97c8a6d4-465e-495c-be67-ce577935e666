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

  users: any;
 
  
  constructor(private userService:UserdisplayService){
    this.userService.users().subscribe((data:any)=>{
      this.users = data;
  });
  }
  
  ngOnInit(): void {
  }


  // getUserFormData(data:any)
  // {
  //   this.userdisplay.saveUsers(data).subscribe((result:any) =>
  //   {
  //     console.log(result);
  //   })
  // }
}
