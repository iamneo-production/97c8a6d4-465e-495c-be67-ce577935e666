import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddOnsServiceService } from '../services/add-ons-service.service';



@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent  {

 
  addOnForm= new FormGroup({
  imageUrl:new FormControl('',[Validators.required]),
  addOnName:new FormControl('',[Validators.required]),
  addOnPrice:new FormControl('',[Validators.required])

});
get imageUrl(){
  return this.addOnForm.get('imageUrl');
}
get addOnName(){
  return this.addOnForm.get('addOnName');
}
get addOnPrice(){
  return this.addOnForm.get('addOnPrice');
}

constructor(private addOnData:AddOnsServiceService){ }

AddaddOnData(data:any){
  this.addOnData.add(data).subscribe((result:any)=>{
    console.log(result);
    alert("Successfully Submitted!!");
     });
   }
   
}
 
