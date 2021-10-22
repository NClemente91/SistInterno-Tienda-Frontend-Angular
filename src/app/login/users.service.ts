import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private registerUserURL = 'http://localhost:3000/auth/register';
  private loginUserURL = 'http://localhost:3000/auth/login';
  public tokenLogin!: string;
  public userLogged!: string;

  constructor(private http: HttpClient) {
    console.log('Servicio user conectado');
  }

  //FUNCION QUE HACE LA PETICION PARA EL LOGIN DEL USUARIO
  getLoginUser(email: string, password: string): Observable<any> {
    const bodyUser = {
      email,
      password,
    };
    return this.http.post(this.loginUserURL, bodyUser);
  }

  //GUARDAMOS EL TOKEN QUE PROVIENE DEL POST LOGIN
  saveTokenLogin(token: string) {
    if (token) {
      this.tokenLogin = token;
    }
  }

  //GUARDAMOS EL NOMBRE DEL USUARIO LOGEADO
  saveUserLogged(nombre: string) {
    this.userLogged = nombre;
  }

  //FUNCION QUE HACE LA PETICION PARA EL REGISTER DEL USUARIO
  getRegisterUser(
    nombre: string,
    apellido: string,
    email: string,
    password: string
  ): Observable<any> {
    const mybody = {
      nombre,
      apellido,
      password,
      email,
    };
    return this.http.post(this.registerUserURL, mybody);
  }
}
