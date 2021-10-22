import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { AllPorductsComponent } from './all-porducts/all-porducts.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OneProductComponent } from './one-product/one-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AllPorductsComponent,
    AddProductComponent,
    ListProductsComponent,
    OneProductComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
