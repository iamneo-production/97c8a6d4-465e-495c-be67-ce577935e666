import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdisplayService 
{
  url = "https://8080-debccaffabbfcfdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users";
  constructor(private http:HttpClient) 
  { 

  }
  saveUsers(data:any)
  {
    return this.http.get(this.url);
  }

  users()
  {
    return this.http.get(this.url);
  }
}
