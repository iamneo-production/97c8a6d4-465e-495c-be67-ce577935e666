import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {

  Url="https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/themes";
  constructor(private http: HttpClient) { }

  themes()
  {
    return this.http.get(this.Url);
  }
  addtheme(data:any){
    return this.http.post(this.Url,data);
  }

  deleteTheme(data:any){
    return this.http.delete(this.Url+"/"+data.id,data);
  }

  updateTheme(data:any){
    return this.http.put(this.Url+"/"+data.id,data);
  }
  
}
