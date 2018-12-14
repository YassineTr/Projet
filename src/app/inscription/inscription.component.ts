import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../Services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) {
     this.createForm();
  }

 createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryRegister() {
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    this.authService.doRegister(email, password)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        console.log('succes');
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });

  }

}
