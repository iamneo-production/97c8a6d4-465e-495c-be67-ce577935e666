import { Component, OnInit,Input } from '@angular/core';
import {DeleteviewsService } from '../services/deleteviews.service';

@Component({
  selector: 'app-deletereviews',
  templateUrl: './deletereviews.component.html',
  styleUrls: ['./deletereviews.component.css']
})
export class DeletereviewsComponent implements OnInit {

  @Input() data:any;
  viewsService: any;
  constructor(private viewService:DeleteviewsService) { }

  ngOnInit(): void {}
  
  deletevi(){
    var confirm=window.confirm("Are you sure you want to delete views ?");
    if(confirm){
      this.viewsService.deleteTheme(this.data).subscribe((views:any)=>
      {
     console.log("deleted");
      });
      location.reload();
    }
  }

}
