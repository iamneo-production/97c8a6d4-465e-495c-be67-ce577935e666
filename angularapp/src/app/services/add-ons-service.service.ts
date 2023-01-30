import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddOnsServiceService {

  constructor(private http:HttpClient) { }

  url = "https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/addons";

  add(addOn:any){
    return this.http.post(this.url,addOn);
  }

  edit(addOn:any){
    return this.http.put(this.url + "/" + addOn.id,addOn);
  }

  delete(addOn:any){
    return this.http.delete(this.url + "/" + addOn.id,addOn);
  }

  view(){
    return this.http.get(this.url);
  }
}
