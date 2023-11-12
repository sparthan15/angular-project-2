import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public canActivate(token: string): boolean {
    console.log(token);
    return token != '';
  }
}

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthService).canActivate(localStorage.getItem('token') + "");
}

