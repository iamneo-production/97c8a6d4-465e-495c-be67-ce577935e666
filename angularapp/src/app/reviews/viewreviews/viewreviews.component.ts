import { Component, OnInit } from '@angular/core';
import { ViewreviewsService } from 'src/app/services/viewreviews.service';

@Component({
  selector: 'app-viewreviews',
  templateUrl: './viewreviews.component.html',
  styleUrls: ['./viewreviews.component.css']
})
export class ViewreviewsComponent implements OnInit {

  constructor(private reviewdata: ViewreviewsService) { }

  ngOnInit(): void {
  }

}
