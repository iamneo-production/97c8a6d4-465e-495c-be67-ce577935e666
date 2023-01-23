import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private route:Router, private activated:ActivatedRoute){}

  login(){
    this.route.navigate(['login']);
  }

  signup(){
    this.route.navigate(['signup']);
  }

}
