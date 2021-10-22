import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cloth, ClothEdit } from '../interfaces/clothes.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private clothesURL = 'http://localhost:3000/clothes/';
  public allClothes!: Cloth[];
  public oneClothe!: Cloth;
  public editClothe!: ClothEdit | undefined;
  public idEdit!: string;

  constructor(private http: HttpClient) {
    console.log('Servicio de productos conectado');
  }

  //FUNCION QUE HACE LA PETICION PARA TRAER TODOS LOS PRODUCTOS
  getAllClothesfromAPI(): Observable<any> {
    return this.http.get(this.clothesURL);
  }

  //FUNCION QUE HACE LA PETICION PARA AGREGAR UN NUEVO PRODUCTO
  addClothefromAPI(
    tipo: string,
    cantidad: number,
    precio: number,
    descripcion: string
  ): Observable<any> {
    const bodyProduct = {
      tipo,
      cantidad,
      precio,
      descripcion,
    };
    return this.http.post(this.clothesURL, bodyProduct);
  }

  //FUNCION QUE HACE LA PETICION PARA EDITAR UN PRODUCTO EXISTENTE
  editClothefromAPI(
    cantidad: number,
    precio: number,
    descripcion: string
  ): Observable<any> {
    const bodyProduct = {
      cantidad,
      precio,
      descripcion,
    };
    return this.http.put(`${this.clothesURL}${this.idEdit}`, bodyProduct);
  }

  //FUNCION QUE HACE LA PETICION PARA TRAER UN PRODUCTO EN PARTICULAR
  getOneClothefromAPI(id: string): Observable<any> {
    return this.http.get(`${this.clothesURL}${id}`);
  }

  //FUNCION QUE HACE LA PETICION PARA BORRAR UN PRODUCTO
  deleteClothefromAPI(id: string): Observable<any> {
    return this.http.delete(`${this.clothesURL}${id}`);
  }
}
