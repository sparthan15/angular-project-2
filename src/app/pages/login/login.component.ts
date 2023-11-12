import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environments';
import { BroadcastService } from 'src/app/shared/broadcast.service';
import { EventKeys } from 'src/app/shared/broadcastEvent.model';
import { LoginService } from './login.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{ provide: AuthService, useClass: AuthService }]
})
export class LoginComponent {
  title: string = "Login form"
  userName: string = '';
  password: string = '';
  hide: boolean = true;
  isAuthenticated: boolean = false;
  
  constructor(private broadcastService: BroadcastService, private loginService: LoginService) {
    this.loginService.isAuthenticationFailedSubject.subscribe(r => {
      this.isAuthenticated = r;
    });
  }

  loginButtonClicked(): void {
    //this.broadcastService?.broadcast(EventKeys.LOGGED_IN, "true");
    this.loginService.authenticate(this.userName, this.password);
  }
}
