import { Component, OnInit } from '@angular/core';
import { ThemeserviceService } from '../services/themeservice.service';
@Component({
  selector: 'app-viewtheme',
  templateUrl: './viewtheme.component.html',
  styleUrls: ['./viewtheme.component.css']
})
export class ViewthemeComponent implements OnInit {
  themes:any;
  constructor(private themeService:ThemeserviceService) {
    this.themeService.themes().subscribe((data:any)=>
    {
      this.themes = data;
    });
   }

  ngOnInit(): void {
  }



}
