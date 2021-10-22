import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedGuard implements CanLoad, CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canLoad(): boolean | UrlTree {
    // return true;
    if (this.loginService.isLogged) {
      return true;
    } else {
      return this.router.parseUrl('/login/signin');
    }
  }
  canActivate(): boolean | UrlTree {
    // return true;
    if (this.loginService.isLogged) {
      return true;
    } else {
      return this.router.parseUrl('/login/signin');
    }
  }
}
