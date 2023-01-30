import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditmenuService {
  url = "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users";


  constructor(private http:HttpClient) { }

  editmenu(user:any)
  {
    return this.http.(this.url+"/"+user.id,user);
  }
}



