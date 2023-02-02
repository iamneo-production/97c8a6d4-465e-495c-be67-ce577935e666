import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url = "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users";

  getUsers(){
    return this.http.get(this.url);
  }

  addUser(user:any){
    return this.http.post(this.url, user);
  }

  delete(user:any){
    return this.http.post(this.url + "/" + user.id, user);
  }

}
