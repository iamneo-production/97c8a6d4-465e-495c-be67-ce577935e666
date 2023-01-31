import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ThemeserviceService } from '../services/themeservice.service';
@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent  {
  themes:any;
  themeExist = false;
  constructor(private themedata:ThemeserviceService, private router:Router) {
    this.themedata.themes().subscribe((theThemes:any)=>{
      this.themes = theThemes;
    });
   }

  themeForm= new FormGroup(
    {
      themeName:new FormControl('',[Validators.required, Validators.minLength(5)]),
      imageUrl:new FormControl('',[Validators.required]),
      photographerDetails:new FormControl('',[Validators.required]),
      videographerDetails:new FormControl('',[Validators.required]),
      returnGift:new FormControl('',[Validators.required]),
      themeCost:new FormControl('',[Validators.required, Validators.minLength(0),Validators.maxLength(6)]),
      themeDescription:new FormControl('',[Validators.required])
    }
  );
  get themeName(){
    return this.themeForm.get('themeName');
  }
  get imageUrl(){
    return this.themeForm.get('imageUrl');
  }
  get photographerDetails(){
    return this.themeForm.get('photographerDetails');
  }
  get videographerDetails(){
    return this.themeForm.get('videographerDetails');
  }
  get returnGift(){
    return this.themeForm.get('returnGift');
  }
  get themeCost(){
    return this.themeForm.get('themeCost');
  }
  get themeDescription(){
    return this.themeForm.get('themeDescription');
  }
  
  addThemeData(data:any){

    for(let i in this.themes){
        if(this.themes[i].themeName == data.themeName || this.themes[i].imageUrl == data.imageUrl){
            this.themeExist = true;
        }
    }
    if(this.themeExist){
      alert("Theme Already Exists");
    }
    else{
      this.themedata.addtheme(data).subscribe((result:any)=>
    {
       console.log(result);
       alert("Theme Added Successfully!!!");
    });
    }
  }

  viewThemes(){
    this.router.navigate(['viewtheme']);
  }


}
