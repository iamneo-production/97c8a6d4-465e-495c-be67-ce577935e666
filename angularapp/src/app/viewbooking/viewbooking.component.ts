import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingServiceService } from '../services/booking-service.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {
  events:any;
  constructor(private bookingService:BookingServiceService, private router:Router) {
    this.bookingService.view().subscribe((theEvents:any)=>{
      this.events = theEvents;
    });
   }

  ngOnInit(): void {
  }

  edit(){
    this.router.navigate(['edit-booking']);
  }

}
