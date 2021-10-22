import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cloth } from 'src/app/interfaces/clothes.interfaces';
import { ProductsService } from '../products.service';

@Component({
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss'],
})
export class OneProductComponent implements OnInit {
  public clothe!: Cloth;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clothe = this.productsService.oneClothe;
  }

  returnPage() {
    this.router.navigateByUrl('/products/todos');
  }
}
