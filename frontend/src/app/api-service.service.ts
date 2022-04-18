import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
 
  //Connect Frontend with Backend
    
    apiUrl="http://localhost:3000/user";

    postData(data:any):Observable<any>{
      return this.http.post(this.apiUrl, data);
    }
}
