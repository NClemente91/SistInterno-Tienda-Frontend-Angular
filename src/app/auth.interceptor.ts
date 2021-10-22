import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './login/users.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private usersService: UsersService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url === 'http://localhost:3000/auth/register' ||
      request.url === 'http://localhost:3000/auth/login'
    ) {
      return next.handle(request);
    } else {
      //DEBEMOS TOMAR EL TOKEN QUE VENGA COMO DATO DEL LOGIN
      const authHeader = `Bearer ${this.usersService.tokenLogin}`;

      //CLONAMOS LA REQUEST Y LE AGREGAMOS EL HEADER CON LA AUTHORIZATION
      const authReq = request.clone({
        headers: request.headers.set('Authorization', authHeader),
      });

      return next.handle(authReq);
    }
  }
}
