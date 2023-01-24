import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemedisplayService {

  constructor(private http:HttpClient) { }
  url="https://8080-bfcdbfbaaeafddfcfdeafdaadbbceeaceaecabef.examlyiopb.examly.io/themes";

  getTheme(){
    return this.http.get(this.url);
  }
  addTheme(them:any){
    return this.http.post(this.url,them);
  }
  editTheme(them:any){
    return this.http.put(this.url+"/"+them.id,them);
  }
  DeleteTheme(them:any){
    return this.http.delete(this.url,them);
  }
}
