import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViewreviewsService {

  url = "https://8080-debccaffabbfcfdeafdaadbbceeaceaecabef.examlyiopb.examly.io/reviews";

  constructor(private http:HttpClient) { }

  reviews()
  {
    return this.http.get(this.url);
  }
}
