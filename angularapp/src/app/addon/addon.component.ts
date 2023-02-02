import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOnsServiceService } from '../services/add-ons-service.service';


@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent  {

  theAddOns: any;
  addonExists: any;

  constructor(private addonService:AddOnsServiceService, config: NgbModalConfig, private modalService: NgbModal) {
    this.addonService.view().subscribe((addons:any)=>{
      this.theAddOns = addons;
    });
   }

  open(content:any) {
    this.modalService.open(content);
  }

    addonForm = new FormGroup({
    addOnName : new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+$')]),
    addOnPrice: new FormControl('',[Validators.required,Validators.maxLength(6)]),
    imageUrl: new FormControl('',[Validators.required])
  });

  get addOnName(){
    return this.addonForm.get('addOnName');
  }

  get addOnPrice(){
    return this.addonForm.get('addOnPrice');
  }

  get imageUrl(){
    return this.addonForm.get('imageUrl');
  }

  // addAddOn(theAddOnsName:any,theAddOnsPrice:any,theAddOnsImageuUrl:any){
  //     var addOn = {addOnName:theAddOnsName,addOnPrice:theAddOnsPrice,imageUrl:theAddOnsImageuUrl};

  //     this.addonService.add(addOn).subscribe((addons)=>{
  //       console.log("Added");
  //     });

  //     this.modalService.dismissAll();
  //     location.reload();
  // }


  submit(form:any){
        for(let i in this.theAddOns){
            if(this.addonForm.get('addOnName').value == this.theAddOns[i].addOnsName){
                this.addonExists = true;
            }
        }

        if(this.addonExists){
            alert("Addon Already  Exists");
            location.reload();
        }
        else
        {
          this.addonService.add(form).subscribe((result:any)=>{
          });
          alert("Addon Added");
          location.reload();
        }
  }



}
