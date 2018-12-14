import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {CheckConnection} from '../Services/CheckConnection.service';
import {AuthGuardService} from '../Services/auth-guard.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  user = true ;
   isAuth: Observable<boolean> | Promise<boolean> | boolean ;
  constructor(private authService: AuthService , private router: Router , private  checkConnection: AuthGuardService) {
    this.checkUser();
  }



  checkUser() {
    this.authService.CurrentUser()
      .then(res => {
        this.user = true ;
        console.log('succes');
      }, err => {
        this.user = false ;
        console.log(err);
      });
  }

  doLogOut() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
     this.isAuth = this.checkConnection.CanActivate();
  }


}
