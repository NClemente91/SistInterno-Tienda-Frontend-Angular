import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/error.service';
import { ProductsService } from '../products.service';

@Component({
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private errorService: ErrorService
  ) {}

  public allClothes = this.productsService.allClothes;
  public position: number = 0;

  ngOnInit(): void {}

  //FUNCION PARA BORRAR UN PRODUCTO
  doDeleteProduct() {
    //TRAIGO EL ELEMENTO DADO QUE CON EL MODAL TRABAJA CON ATRIBUTOS DE ETIQUETA PERSONALIZADOS
    let btnBorrar = document.getElementById('btn-eliminar-producto');

    this.productsService
      .deleteClothefromAPI(String(btnBorrar?.getAttribute('data-id')))
      .subscribe(
        (response) => {
          this.router.navigateByUrl('/products');
        },
        (err) => {
          this.errorService.getError(Number(err.status), err.message);
          this.router.navigateByUrl('error');
        }
      );
  }

  //FUNCION BUSCAR UN PRODUCTO PUNTUAL Y MOSTRARLO
  doSeeProduct(id: string) {
    this.productsService.getOneClothefromAPI(id).subscribe(
      (response) => {
        this.productsService.oneClothe = response.data;
        this.router.navigateByUrl('/products/' + id);
      },
      (err) => {
        this.errorService.getError(Number(err.status), err.message);
        this.router.navigateByUrl('error');
      }
    );
  }

  //FUNCION PARA REDIRIGIR A LA PAGINA PARA PODER EDITAR UN PRODUCTO
  doEditProduct(id: string) {
    this.productsService.idEdit = id;
    this.productsService.editClothe = this.allClothes.find((p) => p._id === id);
    this.router.navigateByUrl('/products/edit/' + id);
  }

  //FUNCION PARA PASAR EL ID DEL PRODUCTO AL MODAL COMO ATRIBUTO
  establecerAtributo(id: string) {
    let btnBorrar = document.getElementById('btn-eliminar-producto');
    btnBorrar?.setAttribute('data-id', id);
  }
}
