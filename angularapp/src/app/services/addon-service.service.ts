import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AddonServiceService {

  constructor(private http: HttpClient) { }

  url = "https://8080-bfcdbfbaaeafddfcfdeafdaadbbceeaceaecabef.examlyiopb.examly.io/addons";

  addons(){
    return this.http.get(this.url);
  }
  addAddon(data:any){
    return this.http.post(this.url,data);
  }
  editAddon(data:any){
    return this.http.put(this.url+"/"+data.id,data);
  }
  deleteAddon(data:any){
    return this.http.delete(this.url,data);
  }
}
