import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {
    console.log('Servicio de login conectado');
  }

  //POR DEFECTO ESTAMOS DESLOGUEADOS
  public isLogged: boolean = false;

  doSignIn() {
    this.isLogged = true;
  }

  doSignOut() {
    this.isLogged = false;
  }
}
