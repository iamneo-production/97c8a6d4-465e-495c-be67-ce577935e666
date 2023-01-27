import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplaythemeService {

  "https://8080-debccaffabbfcfdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users"
  constructor(private http:HttpClient) { }
  gettheme(): Observable<any>
  {
    return this.http.get("https://8080-debccaffabbfcfdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users")
  }
}
