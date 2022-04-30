import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
 
  //Connect Frontend with Backend
    
    apiUrlforSignupUser="http://localhost:4000/user";
    apiUrlGetUsers="http://localhost:4000/users";
    apiUrlGetOneUser="http://localhost:4000/users/"
    postData(data:any):Observable<any>{
      return this.http.post(this.apiUrlforSignupUser, data);
    }
    getUsers():Observable<any>{
      return this.http.get(this.apiUrlGetUsers);
    }
    getOneUser(name:any):Observable<any>{
      console.log(name);
      return this.http.get(this.apiUrlGetOneUser+name);
    }
    updateUserData(id:any,value:any):Observable<any>{
      return this.http.put(this.apiUrlGetOneUser+id,value);
    }
}
