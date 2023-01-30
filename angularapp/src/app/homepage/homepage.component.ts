import { Component } from '@angular/core';
import { EventserviceService } from '../services/eventservice.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {
  events:any;
constructor(private eventsService:EventserviceService){
  
    this.eventsService.view().subscribe((theEvents:any)=>{
      this.events = theEvents;
    });

  }



}
