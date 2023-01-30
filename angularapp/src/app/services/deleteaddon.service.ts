import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeleteaddonService {

  url = "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users";


  constructor(private http:HttpClient) { }

  deleteaddon(user:any)
  {
    return this.http.delete(this.url+"/"+user.id,user);
  }
}
