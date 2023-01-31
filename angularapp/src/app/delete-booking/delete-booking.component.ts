import { Component, OnInit, Input } from '@angular/core';
import { BookingServiceService } from '../services/booking-service.service';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {
  @Input() data: any = {};
  constructor(private bookingService:BookingServiceService) { }

  ngOnInit(): void {
  }

  delete(){
    var confirm = window.confirm("Confirm if you want to Delete this event?");
    if(confirm){

      this.bookingService.delete(this.data).subscribe((bookings:any)=>{
        console.log("deleted");
    });
    
    location.reload();
    }
  }

}
