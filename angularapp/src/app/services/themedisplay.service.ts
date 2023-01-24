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
  addTheme(theme:any){
    return this.http.post(this.url,theme);
  }
  editTheme(theme:any){
    return this.http.put(this.url+"/"+theme.id,theme);
  }
  DeleteTheme(theme:any){
    return this.http.delete(this.url,theme);
  }
}
