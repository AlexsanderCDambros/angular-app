import { AuthService } from './../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/auth/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    user: '',
    password: ''
  };
  form: FormGroup;
  erro = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  mapeiaForm() {
    this.user.user = this.form.get('user').value;
    this.user.password = this.form.get('password').value;
  }

  login() {
    this.mapeiaForm();

    if (this.authService.login(this.user)) {
      this.router.navigate(['']);
    } else {
      this.erro = true;
      this.form.patchValue({
        password: ''
      })
    }
  }

}
