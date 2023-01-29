import { Component, OnInit,Input } from '@angular/core';
import {EditviewsService } from '../services/editviews.service';

@Component({
  selector: 'app-deletereviews',
  templateUrl: './deletereviews.component.html',
  styleUrls: ['./deletereviews.component.css']
})
export class DeletereviewsComponent implements OnInit {

  @Input() data:any;
  constructor(private themeService:EditviewsService) { }

  ngOnInit(): void { }
  
  deleteviews(){
    var confirm = window.confirm("Confirm if you want to delete theme?");
    if(confirm){
      this.themeService.deleteTheme(this.data).subscribe((theme:any)=>
      {
     console.log("deleted");
      });
      location.reload();
    }
  }

}
