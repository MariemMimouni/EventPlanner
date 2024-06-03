import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:300';


  constructor(private http: HttpClient) { }

  registerUser(userDetails: User) {
    const usertToRegister={
      ...userDetails,
      "role":"ClientUser"
    }
    return this.http.post(`${this.baseUrl}/users`, usertToRegister);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }


}
