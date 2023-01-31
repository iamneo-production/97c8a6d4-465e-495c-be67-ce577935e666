import { Component, OnInit } from '@angular/core';
import { ViewreviewsService } from 'src/app/services/viewreviews.service';

@Component({
  selector: 'app-viewreviews',
  templateUrl: './viewreviews.component.html',
  styleUrls: ['./viewreviews.component.css']
})
export class ViewreviewsComponent implements OnInit {

  reviews:any;
  

  constructor(private reviewdata: ViewreviewsService) {
    
     this.reviewdata.reviews().subscribe((data:any)=>
  {
    this.reviews = data
  });
  }

  ngOnInit(): void {
  }

}
