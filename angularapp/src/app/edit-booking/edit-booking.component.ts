import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingServiceService } from '../services/booking-service.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() data:any;

  constructor(private menuService:BookingServiceService,config: NgbModalConfig, private modalService: NgbModal) { }
  open(content:any) {
    this.modalService.open(content);
  }
}
