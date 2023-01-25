import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserdisplayService } from 'src/app/services/userdisplay.service';

interface UserDetails
{
  email:string;
  username:string;
  mobileNo:string
}


=======
import { UserDisplayService } from 'src/app/services/user-display.service';
>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

<<<<<<< HEAD
  searchUser:any;
  users:any;

  constructor(private userdisplay:UserdisplayService) 
  { 
    userdisplay.users().subscribe((data:any) =>
    {
      console.log(data);
      this.users=data;
    })
=======
  users: any;
  
  constructor(private userService:UserDisplayService){
    this.userService.users().subscribe((data:any)=>{
      this.users = data;
  });
>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9
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
