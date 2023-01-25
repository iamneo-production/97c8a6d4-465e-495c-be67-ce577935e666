import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from './services/customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'angularapp';


  constructor(private userdata: UserService) {}

  myForm = new FormGroup({
    id: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')

  });

  get id(){
      return this.myForm.get('id');
  }
  get username(){
    return this.myForm.get('username');
  }
  get password(){
  return this.myForm.get('password');
  }

    delete(item,any){
      alert(" Are You Sure You Want To Delete User ?");
      this.userdata.deleteUser(item).subscribe((user:any)=>{
        console.log(user);

      });
}
=======
  
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
>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9

}
