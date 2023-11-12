import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticationFailedSubject: Subject<boolean>;
  private headers: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(private router: Router, private httpClient: HttpClient) {
    this.isAuthenticationFailedSubject = new Subject<boolean>();
  }

  public authenticate(userName: string, password: string) {
    this.httpClient.post<LoginUserResponse>(
      "http://localhost:8083/auth/login",
      new LoginUserRequest(userName, password),
      { headers: this.headers })
      .subscribe(r => {
        if (r.token != undefined) {
          localStorage.setItem('token', r.token);
          this.router.navigate(['home']);
        } else {
          this.isAuthenticationFailedSubject.next(false);
        }
      });
  }

}

class LoginUserRequest {
  userName: string
  password: string

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }
}

export class LoginUserResponse {
  token: string;

  constructor(token: string) {
    this.token = token;
  }
}
