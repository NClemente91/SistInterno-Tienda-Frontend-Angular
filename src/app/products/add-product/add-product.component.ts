import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/error.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  //FUNCION ENLAZADA CON EL FORMULARIO DE INGRESO DE UN NUEVO PRODUCTO
  doSubmit() {
    const { tipo, cantidad, precio, descripcion } = this.addProductForm.value;
    if (this.addProductForm.invalid) {
      alert('Completa todos los campos');
      return;
    } else if (
      tipo !== 'buzo' &&
      tipo !== 'remera' &&
      tipo !== 'campera' &&
      tipo !== 'pantalón'
    ) {
      alert('Tipo de ropa incorrecto');
      return;
    }

    this.productsService
      .addClothefromAPI(tipo, cantidad, precio, descripcion)
      .subscribe(
        (response) => {
          alert('Producto agregado');
          this.addProductForm.reset();
        },
        (err) => {
          this.errorService.getError(Number(err.status), err.message);
          this.router.navigateByUrl('error');
        }
      );
  }
}
