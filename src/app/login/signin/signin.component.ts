import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/error.service';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private usersService: UsersService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  //FUNCION ENLAZADA CON EL FORMULARIO DE LOGIN
  doSubmit() {
    if (this.loginForm.invalid) {
      alert('Completa todos los campos');
      return;
    }

    const { email, password } = this.loginForm.value;
    this.usersService.getLoginUser(email, password).subscribe(
      (response) => {
        this.usersService.saveTokenLogin(response.data.token);
        this.usersService.saveUserLogged(response.data.user.nombre);
        this.loginService.doSignIn();
        this.router.navigateByUrl('/products');
      },
      (err) => {
        if (err.status === 400) {
          alert(err.error.message);
          this.loginForm.reset();
          this.router.navigateByUrl('login/signin');
        } else {
          this.errorService.getError(Number(status), err.message);
          this.router.navigateByUrl('error');
        }
      }
    );
  }

  //FUNCION PARA CUANDO SE QUIERE CERRAR SESION
  doExitLogged() {
    this.loginService.doSignOut();
    this.router.navigate(['']);
  }
}
