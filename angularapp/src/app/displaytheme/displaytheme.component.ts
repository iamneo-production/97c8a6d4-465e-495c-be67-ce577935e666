import { Component, OnInit } from '@angular/core';
import { DisplaythemeService } from '../services/displaytheme.service';

@Component({
  selector: 'app-displaytheme',
  templateUrl: './displaytheme.component.html',
  styleUrls: ['./displaytheme.component.css']
})
export class DisplaythemeComponent implements OnInit {

  themeData : Array<any>=[];
  constructor(private displaythemeservice: DisplaythemeService)
   {
    this.displaythemeservice.gettheme().subscribe((response)=>
    {
      console.log(response);
      this.themeData = response;
    });
    }

  ngOnInit(): void { }

}
