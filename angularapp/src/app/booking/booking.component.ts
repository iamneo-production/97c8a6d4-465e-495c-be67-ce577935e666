import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AddOnsServiceService } from '../services/add-ons-service.service';
import { BookingServiceService } from '../services/booking-service.service';
import { MenudataService } from '../services/menudata.service';
import { VenuesserviceService } from '../services/venuesservice.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  addons: any;
  items:any;
  theVenues: any;
  theEvents:any;
  eventExists:any;
     constructor(private menuService:MenudataService, private addonService:AddOnsServiceService,
       private bookingService:BookingServiceService, private venues:VenuesserviceService) {
         
        this.addonService.view().subscribe((theAddons)=>{
          this.addons = theAddons;
        });

        this.menuService.items().subscribe((theItems:any)=>{
          this.items = theItems;
        });

        this.venues.view().subscribe((myVenues:any)=>{
          this.theVenues = myVenues;
        });

        this.bookingService.viewEvent(sessionStorage.getItem("userid")).subscribe((result:any)=>{
          this.theEvents = result;
        });
        
      }

  // ngOnInit(): void {
  // }

  next: boolean = false;
  firstFormData:any;
  secondFormData:any;

    bookingForm = new FormGroup({
      eventName: new FormControl('',[Validators.required]),
      applicantName: new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+$')]),
      applicantAddress: new FormControl('',[Validators.required]),
      applicantMobileNo: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      applicantEmailId: new FormControl('',[Validators.email, Validators.required]),
      eventAddress: new FormControl('',[Validators.required]),
      eventDate: new FormControl('',[Validators.required]),
      eventTime: new FormControl('',[Validators.required]),
      noOfPeople: new FormControl('',[Validators.required]),
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

bookingForm2 = new FormGroup({
  selectCategory: new FormControl('',[Validators.required]),
  quantityOfVeg: new FormControl('',[Validators.required]),
  quantityOfNonVeg: new FormControl('',[Validators.required]),
  selectAddOnsCategory: new FormControl('',[Validators.required])
});
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
total:number = 0;
values: any;
    bookEvent(form:any){

      this.secondFormData = form;

      this.values = this.bookingForm2.get('selectAddOnsCategory').value;

      for(let v of this.values){
          this.total += parseInt(v);
      }
   
    
      var event =
      {userid:Number(sessionStorage.getItem("userid")),eventName:this.firstFormData.eventName,applicantName:this.firstFormData.applicantName,
      applicantAddress:this.firstFormData.applicantAddress,applicantMobileNo:this.firstFormData.applicantMobileNo,
      applicantEmailId:this.firstFormData.applicantEmailId,eventAddress:this.firstFormData.eventAddress,eventDate:this.firstFormData.eventDate,
      eventTime:this.firstFormData.eventTime,noOfPeople:this.firstFormData.noOfPeople,foodCategory:this.secondFormData.selectFoodCategory,
      quantityOfVeg:this.secondFormData.quantityOfVeg,quantityOfNonVeg:this.secondFormData.quantityNonOfVeg,total:this.total}

      this.bookingService.add(event).subscribe((events:any)=>{
      });
      alert("Event has been added")
      location.reload();
        
    }

    nextPage(form:any){

      for(let i in this.theEvents){
        if(this.bookingForm.get('eventName').value == this.theEvents[i].eventName){
          this.eventExists = true;
          break;
        }
    }

    if(this.eventExists){
        alert("You have already Booked this event");
        this.next = false;
    }
    else{
      this.next = true;
      this.firstFormData = form;
    }
    }

}
