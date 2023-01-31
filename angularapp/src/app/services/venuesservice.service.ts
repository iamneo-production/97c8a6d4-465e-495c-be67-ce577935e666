import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class VenuesserviceService {

  constructor(private http:HttpClient) { }

  url = "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/venues";

  view(){
    return this.http.get(this.url);
  }
}
