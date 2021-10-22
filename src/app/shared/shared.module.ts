import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [NavbarComponent, ErrorComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavbarComponent, ErrorComponent],
})
export class SharedModule {}
