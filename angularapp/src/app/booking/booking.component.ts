import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AddOnsServiceService } from '../services/add-ons-service.service';
import { BookingServiceService } from '../services/booking-service.service';
import { MenudataService } from '../services/menudata.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  addons: any;
  items:any;
     constructor(private menuService:MenudataService, private addonService:AddOnsServiceService, private bookingService:BookingServiceService) {
        this.addonService.view().subscribe((theAddons)=>{
          this.addons = theAddons;
        });

        this.menuService.items().subscribe((theItems:any)=>{
          this.items = theItems;
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

    bookEvent(form:any, category:any)
    {

        console.log(category);
        // this.secondFormData = form;
        // var event = {eventName:this.firstFormData.eventName,applicantName:this.firstFormData.applicantName,applicantAddress:this.firstFormData.applicantAddress,
        //   applicantEmailId: this.firstFormData.applicantEmailId,applicantMobileNo:this.firstFormData.applicantMobileNo, 
        //   eventAddress: this.firstFormData.eventAddress, eventDate: this.firstFormData.eventDate,eventTime:this.eventTime,noOfPeople:this.eventTime,
        //   foodType: this.secondFormData.selectCategory,quantityOfVeg:this.secondFormData.quantityOfVeg,quantityNonOfVeg:this.secondFormData.quantityNonOfVeg,
        //   addons:this.secondFormData.selectAddOnsCategory
        // };

        // this.bookingService.add(event).subscribe(()=>{
        //   console.log("added");
        // });
        
    }

    nextPage(form:any){
        this.next = true;
        this.firstFormData = form;
    }

}
