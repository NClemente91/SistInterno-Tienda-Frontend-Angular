import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/error.service';
import { ProductsService } from '../products.service';

@Component({
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  editProductForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.editProductForm = this.formBuilder.group({
      cantidad: [
        `${this.productsService.editClothe?.cantidad}`,
        Validators.required,
      ],
      precio: [
        `${this.productsService.editClothe?.precio}`,
        Validators.required,
      ],
      descripcion: [
        `${this.productsService.editClothe?.descripcion}`,
        Validators.required,
      ],
    });
  }

  //FUNCION ENLAZADA CON EL FORMULARIO EDICION DE UN PRODUCTO EXISTENTE
  doSubmit() {
    const { cantidad, precio, descripcion } = this.editProductForm.value;

    if (this.editProductForm.invalid) {
      alert('Completa todos los campos');
      return;
    }

    this.productsService
      .editClothefromAPI(cantidad, precio, descripcion)
      .subscribe(
        (response) => {
          alert('Producto editado');
          this.router.navigateByUrl('products');
        },
        (err) => {
          if (err.status === 404) {
            alert(err.error.message);
            this.router.navigateByUrl('products');
          } else {
            this.errorService.getError(Number(status), err.message);
            this.router.navigateByUrl('error');
          }
        }
      );
  }
}
