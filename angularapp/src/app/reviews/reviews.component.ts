import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  
  ratings = 5;

  reviewsform = new FormGroup(
    {
      name: new FormControl('',[Validators.required,]),
      email: new FormControl('',[Validators.required,Validators.email]),
      reviews: new FormControl('',[Validators.required,]),

    });
    get name()
    {
      return this.reviewsform.get('name');
    }

    get email()
    {
      return this.reviewsform.get('email');
    }

    get reviews()
    {
      return this.reviewsform.get('reviews');
    }
    // userReview()
    // {
    // console.warn(this.reviewsform.value);
    // }

      active = 1;  
    constructor(private reviewdata: ReviewsService) { }   
      userReview(data:any)
    {
            this.reviewdata.addReviews(data).subscribe((result:any)=>   
         {       
         console.log(result);  
               alert("Review added successfully!");    
          });  
        }



  ngOnInit(): void {
  }

}
