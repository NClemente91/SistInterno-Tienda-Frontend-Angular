import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin' },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
