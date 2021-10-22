import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/error.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all-porducts',
  templateUrl: './all-porducts.component.html',
  styleUrls: ['./all-porducts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPorductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {}

  //FUNCION PARA VER TODOS LOS PRODUCTOS
  seeAllProducts() {
    this.productsService.getAllClothesfromAPI().subscribe(
      (response) => {
        this.productsService.allClothes = response.data.clothes;
        this.router.navigateByUrl('/products/todos');
      },
      (err) => {
        this.errorService.getError(Number(err.status), err.message);
        this.router.navigateByUrl('error');
      }
    );
  }
}
