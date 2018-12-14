import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  // noinspection JSAnnotator
  constructor (public authService: AuthService , private fb: FormBuilder , private router: Router) {
    this.createForm();
}
createForm() {
  this.loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
}

  tryLogin() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService.doLogin(email, password)
      .then(res => {
        console.log(res);
        this.router.navigateByUrl('http://localhost:4200/accueil');
        this.errorMessage = 'Welcome';
        console.log('succes');
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });

  }
}
