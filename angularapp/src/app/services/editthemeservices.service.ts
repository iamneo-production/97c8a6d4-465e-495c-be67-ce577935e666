import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EditthemeservicesService {
  Url="https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/themes";

  constructor(private http: HttpClient) { }
  
  updateTheme(data:any){
    return this.http.put(this.Url+"/"+data.id,data);
  }



}
