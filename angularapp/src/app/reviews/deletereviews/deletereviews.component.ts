import { Component, OnInit,Input } from '@angular/core';
import {DeletereviewsService } from '../services/deletereviews.service';

@Component({
  selector: 'app-deletereviews',
  templateUrl: './deletereviews.component.html',
  styleUrls: ['./deletereviews.component.css']
})
export class DeletereviewsComponent implements OnInit {

  @Input() data:any;
  viewsService: any;
  constructor(private viewService:DeletereviewsService) { }

  ngOnInit(): void {}
  
  deletevi(){
    var confirm=window.confirm("Are you sure you want to delete views ?");
    if(confirm){
      this.viewsService.deletereviews(this.data).subscribe((reviews:any)=>
      {
     console.log("deleted");
      });
      location.reload();
    }
  }

}
