import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenudataService } from '../services/menudata.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  active = 1;
menuForm = new FormGroup(
  {
    imageFile:new FormControl('',[Validators && Validators.required]),
    itemName:new FormControl('',[Validators && Validators.required]),
    itemCatagory:new FormControl('',[Validators && Validators.required]),
    itemPrice: new FormControl('',[Validators && Validators.required]),
  }
);

get imageFile(){
  return this.menuForm.get('imageFile');
}
get itemName(){
  return this.menuForm.get('itemName');
}
get itemCatagory(){
  return this.menuForm.get('itemCatagory');
}
get itemPrice(){
  return this.menuForm.get('itemPrice');
}



  constructor(private menudata:MenudataService) { }
  
  getMenuData(data:any){
    this.menudata.additems(data).subscribe((result)=>
    {
   console.log(result);
   alert("Menu Item added successfully!!!");
    });
  }

}
