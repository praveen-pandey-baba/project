import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users';
uri = 'repos';
  constructor(private http: HttpClient) { }
  

  getUsers():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  getuser(id:number):Observable<any>{
    
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getRepo(username:string):Observable<any>{
   
    return this.http.get(`${this.apiUrl}/${username}/${this.uri}`);
  }

}
