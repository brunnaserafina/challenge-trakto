import { IUser } from '../../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly API = 'https://api.trakto.io';

  constructor(private http: HttpClient) {}

  login(user: IUser) {
    return this.http.post<any>(`${this.API}/auth/signin`, user);
  }

  listLastTenDesigns() {
    const tokenString: string | null = localStorage?.getItem('trakto');
    const token = tokenString ? JSON.parse(tokenString).acess_token : null;

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.get(
      `${this.API}/document?total_per_page=10&order_by=title&order_orientation=desc`,
      { headers }
    );
  }

  listAllDesigns(){
    const tokenString: string | null = localStorage?.getItem('trakto');
    const token = tokenString ? JSON.parse(tokenString).acess_token : null;

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.get(
      `${this.API}/document?order_by=title&order_orientation=desc`,
      { headers }
    );
  }
}
