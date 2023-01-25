import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }

  next: boolean = false;

    bookingForm = new FormGroup({
      eventName: new FormControl('',[Validators.required]),
      applicantName: new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]')]),
      applicantAddress: new FormControl('',[Validators.required]),
      applicantMobileNo: new FormControl('',[Validators.required]),
      applicantEmailId: new FormControl('',[Validators.email, Validators.required]),
      eventAddress: new FormControl('',[Validators.required]),
      eventDate: new FormControl('',[Validators.required]),
      eventTime: new FormControl('',[Validators.required]),
      noOfPeople: new FormControl('',[Validators.required]),
      selectCategory: new FormControl('',[Validators.required]),
      quantityOfVeg: new FormControl('',[Validators.required]),
      quantityOfNonVeg: new FormControl('',[Validators.required]),
      selectAddOnsCategory: new FormControl('',[Validators.required])
    });

get eventName(){
  return this.bookingForm.get('eventName');
}
get applicantName(){
  return this.bookingForm.get('applicantName');
}
get applicantAddress(){
  return this.bookingForm.get('applicantAddress');
}
get applicantMobileNo(){
  return this.bookingForm.get('applicantMobileNo');
}
get applicantEmailId(){
  return this.bookingForm.get('applicantEmailId');
}
get eventAddress(){
  return this.bookingForm.get('eventAddress');
}
get eventDate(){
  return this.bookingForm.get('eventDate');
}
get eventTime(){
  return this.bookingForm.get('eventTime');
}
get noOfPeople(){
  return this.bookingForm.get('noOfPeople');
}
get selectCategory(){
  return this.bookingForm.get('selectCategory');
}
get quantityOfVeg(){
  return this.bookingForm.get('quantityOfVeg');
}
get quantityNonOfVeg(){
  return this.bookingForm.get('quantityOfNonVeg');
}
get selectAddOnsCategory(){
  return this.bookingForm.get('selectAddOnsCategory');
}

    bookEvent(){

    }

    nextPage(){
        this.next = true;
    }

}
