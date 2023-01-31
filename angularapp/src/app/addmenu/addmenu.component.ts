import { Component} from '@angular/core';
import { MenudataService } from '../services/menudata.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent  {

    constructor(private menuService:MenudataService,config: NgbModalConfig, private modalService: NgbModal, private router:Router){}

    open(content:any) {
      this.modalService.open(content);
    }

    addMenuForm = new FormGroup({
      imageUrl: new FormControl('',[Validators.required]),
      itemName: new FormControl('',[Validators.required]),
      itemCatagory: new FormControl('',[Validators.required]),
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

        this.menuService.additems(menuForm).subscribe((data:any)=>{
          console.log("added");
        });

        this.modalService.dismissAll();
        location.reload();
    }

   viewMenuItems(){
      this.router.navigate(['viewmenu']);
   }

}
