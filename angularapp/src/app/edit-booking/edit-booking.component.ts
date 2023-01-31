
import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingServiceService } from '../services/booking-service.service';

@Component({
  selector: 'app-edit-booking',
  
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

    @Input() data:any;  
  constructor(private bookingService:BookingServiceService,config: NgbModalConfig, private modalService: NgbModal) { }  
  open(content:any) 
  {    
    this.modalService.open(content);  
  }

  

  ngOnInit(): void {
  }

  
  editBooking(eId:any,eName:any,eTime:any,eDate:any,ePrice:any)
  {
    var booking = {id:eId,eventName:eName,eventTime:eTime,eventDate:eDate,price:ePrice};
    this.bookingService.edit(booking).subscribe((bookings:any)=>
    {
      console.log("updated");
    });
    this.modalService.dismissAll();
    location.reload();
  }

}
