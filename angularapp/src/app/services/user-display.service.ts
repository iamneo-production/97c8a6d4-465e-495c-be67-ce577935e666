import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserDisplayService {

  constructor(private http:HttpClient) { }

  url= "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users";
  users(){
    return this.http.get(this.url);
  }

}
