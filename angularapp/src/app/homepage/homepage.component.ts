import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingServiceService } from '../services/booking-service.service';
import { EventserviceService } from '../services/eventservice.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {
  events:any;
    constructor(private bookingService:BookingServiceService, private router:Router){
    this.bookingService.view().subscribe((theEvents:any)=>{
      this.events = theEvents;
    });

  }

  review(){
    this.router.navigate(['reviews']);
  }



}
