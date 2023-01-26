import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http:HttpClient) { }

  url = "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users";

  getReviews(){
    return this.http.get(this.url);
  }

  addReviews(user:any){
    return this.http.post(this.url, user);
  }

}
