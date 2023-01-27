import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

   url = "http://localhost:3000/users";

  getUsers()
  { 
    return this.http.get(this.url);
    }

      updateUser(data: any){
            return this.http.put(this.url+"/"+ data.id,data); 
                 }

                      deleteUser(data:any)
                           {    
                             return this.http.delete(this.url+"/"+data.id,data); 
                                   }

}
