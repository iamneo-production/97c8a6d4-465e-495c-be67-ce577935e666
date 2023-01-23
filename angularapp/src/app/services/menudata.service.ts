import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenudataService {

  url="";
  constructor(private ht:HttpClient) { }
  items()
  {
    return this.ht.get(this.url);
  }
  addMenu(data:any)
  {
    return this.ht.delete(this.url,data);
  }
}
