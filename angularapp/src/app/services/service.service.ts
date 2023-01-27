import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "https://8080-debccaffabbfcfdeafdaadbbceeaceaecabef.examlyiopb.examly.io/users";
  constructor(private ht:HttpClient) { }

  users()
  {
    return this.ht.get(this.url)
  }
}
