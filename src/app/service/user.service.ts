import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserInfo(userId: number): Observable<User> {
    return this.http.get<User>(` https://6255745f52d8738c6922364f.mockapi.io/users/${userId}`);
  }
}
