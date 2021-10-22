import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/error.service';
import { UsersService } from '../users.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  //FUNCION ENLAZADA CON EL FORMULARIO DE REGISTRO
  doSubmit() {
    if (this.registerForm.invalid) {
      alert('Completa todos los campos');
      return;
    }

    const { nombre, apellido, email, password } = this.registerForm.value;
    this.usersService
      .getRegisterUser(nombre, apellido, email, password)
      .subscribe(
        (response) => {
          this.router.navigateByUrl('/login/signin');
        },
        (err) => {
          this.errorService.getError(Number(err.status), err.message);
          this.router.navigateByUrl('error');
        }
      );
  }
}
