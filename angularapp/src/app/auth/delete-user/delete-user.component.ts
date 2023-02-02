import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
@Input() data: any;

  constructor(private userService:LoginService) { }

  ngOnInit(): void {
  }


  delete(){
    var confirm = window.confirm("Confirm if you want to Delete User?");
    if(confirm){

      this.userService.delete(this.data).subscribe((users:any)=>{
        console.log("deleted");
        location.reload();
    });
    }

   
  }

}
