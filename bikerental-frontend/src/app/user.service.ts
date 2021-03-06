import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


const USERS_URL = 'http://127.0.0.1:8000/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers(): Observable<Object> {
    return this.http.get(USERS_URL);
  }

  createUser(newUser): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(USERS_URL, newUser, httpOptions);
  }

}
