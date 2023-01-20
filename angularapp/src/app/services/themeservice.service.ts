import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {
 // getProductByName(title: any){
  //  return this.http.get<any>("http://localhost:3000/themes/"+title);
  //}

  Url="http://localhost:3000/themes";
  constructor(private http: HttpClient) { }

  themes()
  {
    return 
  }

}
