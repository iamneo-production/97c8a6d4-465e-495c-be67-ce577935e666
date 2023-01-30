import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenudataService {

  url="https://8080-baafadfefdeafdaadbbceeaceaecabef.examlyiopb.examly.io/cart";
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
