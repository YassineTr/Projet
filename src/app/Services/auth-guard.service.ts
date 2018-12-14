import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService {
  constructor(private router: Router) { }

  // noinspection JSAnnotator
  CanActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      ((resolve , reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      })
    );
  }
}
