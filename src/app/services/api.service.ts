import { Injectable } from '@angular/core';
import { take} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  ApiRequest(url, data,method) {
  
    if(method=="GET"){
      return this.http.get(url).pipe(
        take(1)
      );
    }
    if(method=="POST"){
      return this.http.post(url, data).pipe(
        take(1)
      );
    }
    if(method=="PUT"){
      return this.http.put(url, data).pipe(
        take(1)
      );
    }

  }
}
