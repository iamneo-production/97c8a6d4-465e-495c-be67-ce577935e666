import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {

 
constructor(private route: Router){}

counter1 = 0;
counter2 = 0;
counter3 = 0;

increment1() {
  this.counter1++;
}

increment2() {
  this.counter2++;
}

increment3() {
  this.counter3++;
}

addReview(){
    this.route.navigate(['reviews']);
}



}
