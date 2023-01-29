import { Component, OnInit,Input } from '@angular/core';
import {ThemeserviceService } from '../services/themeservice.service';
@Component({
  selector: 'app-deletetheme',
  templateUrl: './deletetheme.component.html',
  styleUrls: ['./deletetheme.component.css']
})
export class DeletethemeComponent implements OnInit {
 @Input() data:any;
  constructor(private themeService:ThemeserviceService) { }

  ngOnInit(): void {}
  
  delete(){
    var confirm = window.confirm("Confirm if you want to delete theme?");
    if(confirm){
      this.themeService.deleteTheme(this.data).subscribe((theme:any)=>
      {
     console.log("deleted");
      });
      location.reload();
    }
  }

}
