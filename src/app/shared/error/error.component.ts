import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService, myError } from '../error.service';

@Component({
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor(private router: Router, private errorService: ErrorService) {}

  public error: myError = this.errorService.error;

  ngOnInit(): void {}

  returnPage() {
    this.router.navigateByUrl('');
  }
}
