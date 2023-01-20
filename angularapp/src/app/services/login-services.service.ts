import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http:HttpClient) { }

  url = "";

  getUsers(){
    return this.http.get(this.url);
  }

  addUser(user:any){
    return this.http.post(this.url,user);
  }

  

}
