import { Component, OnInit,Input } from '@angular/core';
import {DeleteviewsService } from '../services/deleteviews.service';

@Component({
  selector: 'app-deleteviews',
  templateUrl: './deleteviews.component.html',
  styleUrls: ['./deleteviews.component.css']
})
export class DeleteviewsComponent implements OnInit {
  @Input() data:any;
  constructor(private deleteviewsService:DeleteviewsService) { }

  ngOnInit(): void { }
  
  deleteviews(){
    var confirm = window.confirm("Are you sure if you want to delete Views?");
    if(confirm){
      this.deleteviewsService.deleteviews(this.data).subscribe((deleteviews:any)=>
      {
     console.log("deleted");
      });
      location.reload();
    }
  }

}

