import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { UsersService } from 'src/app/login/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  public isLogged: boolean = this.loginService.isLogged;
  public userLogged: string = this.usersService.userLogged;

  doLogout() {
    this.loginService.doSignOut();
  }
}
