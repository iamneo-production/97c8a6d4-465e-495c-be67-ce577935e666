import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  url = "https://8080-debccaffabbfcfdeafdaadbbceeaceaecabef.examlyiopb.examly.io/reviews";

  constructor(private http:HttpClient) { }

  // reviews()
  // {
  //   return this.http.get(this.url);
  // }

  addReviews(user:any)
  {
    return this.http.post(this.url, user);
  }

  // deleteReview(user:any)
  // {
  //   return this.http.delete(this.url+"/"+user.id,user);
  // }
  // updateReviews(user:any)
  // {
  //   return this.http.put(this.url+"/"+user.id,user)
  // }

}
