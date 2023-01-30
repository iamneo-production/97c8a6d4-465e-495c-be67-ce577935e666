import { Component, OnInit,Input } from '@angular/core';
import { DeleteaddonService } from '../services/deleteaddon.service';

@Component({
  selector: 'app-deleteaddon',
  templateUrl: './deleteaddon.component.html',
  styleUrls: ['./deleteaddon.component.css']
})
export class DeleteaddonComponent implements OnInit {

  @Input() data:any;
  constructor(private deleteaddonService:DeleteaddonService) { }

  ngOnInit(): void {}
  
  deleteaddon(){
    var confirm = window.confirm("Are you sure if you want to delete Views?");
    if(confirm){
      this.deleteaddonService.deleteaddon(this.data).subscribe((deleteviews:any)=>
      {
     console.log("deleted");
      });
      location.reload();
    }
  }

}

