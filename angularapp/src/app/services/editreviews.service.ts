import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditreviewsService {

  url = "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users";

  constructor(private http:HttpClient) { }

  updateReviews(user:any)
  {
    return this.http.put(this.url+"/"+user.id,user)
  }

}
