import { Injectable } from '@angular/core';

export interface myError {
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  public error!: myError;

  constructor() {}

  getError(status: number, message: string) {
    //Valor que me retorna cuando no conecto el servidor de node
    if (status === 0) {
      this.error = {
        status: 503,
        message: 'Service Unavailable',
      };
    } else {
      this.error = {
        status,
        message,
      };
    }
  }
}
