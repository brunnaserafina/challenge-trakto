import { IUser } from '../../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly API = 'https://api.trakto.io';

  constructor(private http: HttpClient) {}

  login(user: IUser) {
    return this.http.post<any>(`${this.API}/auth/signin`, user);
  }
}
