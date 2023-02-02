import { Component} from '@angular/core';
import { MenudataService } from '../services/menudata.service';

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent  {
  items:any;
  itemExists: any;
    constructor(private menuService:MenudataService, private router:Router){
          this.menuService.items().subscribe((result)=>{
            this.items = result;
          });
    }

    addMenuForm = new FormGroup({
      imageUrl: new FormControl('',[Validators.required]),
      itemName: new FormControl('',[Validators.required]),
      itemCategory: new FormControl('',[Validators.required]),
      itemPrice: new FormControl('',[Validators.required,Validators.maxLength(6)])
    });

    get imageUrl(){
      return this.addMenuForm.get('imageUrl');
    }

    get itemName(){
      return this.addMenuForm.get('itemName');
    }

    get itemCategory(){
      return this.addMenuForm.get('itemCategory');
    }

    get itemPrice(){
      return this.addMenuForm.get('itemPrice');
    }

    addMenu(menuForm:any){

     for(let i in this.items)
     {
        if(this.addMenuForm.get('itemName').value == this.items[i].itemName)
        {
            this.itemExists = true;   
        }
     }

     if(this.itemExists){
        alert("Item already exists");
     }
     else{
      this.menuService.additems(menuForm).subscribe((data:any)=>{
        this.router.navigate(['viewmenu']);
      });
      alert("Menu Item Added");
     }

        
    }
   viewMenuItems(){
      this.router.navigate(['viewmenu']);
   }

}
