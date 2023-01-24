import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenudataService {

  url="http://localhost:3000/menuitems";
  constructor(private ht:HttpClient) { }
  items()
  {
    return this.ht.get(this.url);
  }
  additems(data:any)
  {
    return this.ht.post(this.url,data);
  }
  deleteitems(data:any){
    return this.ht.delete(this.url+"/"+data.id,data);
  }
  updateitems(data:any){
    return this.ht.put(this.url+"/"+data.id,data);
  }
}
