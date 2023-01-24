import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
@Input() data: any = {};
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

  delete(){
    this.userService.delete(this.data).subscribe((users:any)=>{
        console.log("deleted");
    });
    
    location.reload();
  }

}
