import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private http:HttpClient) { }

  url = "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/events";

  view(){
    return this.http.get(this.url);
  }

  add(event:any){
    return this.http.post(this.url,event);
  }

  delete(event:any){
    return this.http.delete(this.url + "/" + event.id,event);
  }

  edit(event:any){
    return this.http.put(this.url + "/" + event.id,event);
  }

  viewEvent(userid:any){
    return this.http.get(this.url + "?userid="+userid);
  }

}
