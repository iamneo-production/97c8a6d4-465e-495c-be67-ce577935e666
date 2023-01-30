import { Component, OnInit,Input } from '@angular/core';
import {EditreviewsService } from '../services/editreviews.service';

@Component({
  selector: 'app-editreviews',
  templateUrl: './editreviews.component.html',
  styleUrls: ['./editreviews.component.css']
})
export class EditreviewsComponent implements OnInit {

  @Input() data:any;
  reviewsService: any;
  constructor(private reviewService:EditreviewsService) { }

  ngOnInit(): void {}
  
  editreviews(){
    var confirm=window.confirm("Are you sure you want to edit reviews ?");
    if(confirm){
      this.reviewsService.editreviews(this.data).subscribe((reviews:any)=>
      {
     console.log("edited");
      });
      location.reload();
    }
  }

}