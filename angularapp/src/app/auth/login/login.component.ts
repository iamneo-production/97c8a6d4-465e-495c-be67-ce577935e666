import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any;
  constructor(private userdata: ServiceService)
  {
    userdata.users().subscribe((data)=>
    {
      console.log(data);
      this.users=data;
    }
    );
  }

    // constructor(private userdata:ServiceService){}

  loginform = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12), Validators.pattern('[a-z A-Z 1-9]+$')]),

    });
    get email()
    {
      return this.loginform.get('email');
    }

    get password()
    {
      return this.loginform.get('password');
    }
    loginUser()
    {
      // this.userdata.users().subscribe((user:any)=>{
      //     if(user.email === this.loginform.get('email')){
      //         console.log("Logged In");
      //     }
      // });
    console.warn(this.loginform.value);
    }


  ngOnInit(): void {
  }

}
