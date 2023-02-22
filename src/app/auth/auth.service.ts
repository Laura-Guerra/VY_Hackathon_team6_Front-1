import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ERol } from './models/ERol';
import { EJwt } from './models/EJwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:7227/api/User/login'; // Guardar en enviroments
  token!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(user: string, password: string) {
    const login = { email: user, password: password };
    console.log(JSON.stringify(login))
    this.http
      .post(this.uri, JSON.stringify(login))
      .subscribe(
        (resp:any) => {
            console.log(resp)
            localStorage.setItem('auth_token', resp[0].accessToken);
            this.router.navigate(['home']);
        }
      );
  }

  islogin(): boolean {
    return localStorage.getItem('auth_token') ? true : false;
  }

  isAdmin(): boolean {
    const user: any = jwt_decode(localStorage.getItem('auth_token')!)
    return user[EJwt.role] == ERol.admin;
  }
}
