import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  url = "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users";

  delete(user:any){
      return this.http.delete(this.url + "/" + user.id,user);
  }

  edit(user:any){
    return this.http.put(this.url + "/" + user.id,user);
  }
  
}
