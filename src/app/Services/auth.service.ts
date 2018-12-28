import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {


  doRegister(email: string , password: string) {

    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogin(email: string , password: string) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogout() {

      if (firebase.auth().currentUser) {
        firebase.auth().signOut();
        
      }
  }

  CurrentUser () {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        resolve(true);
      } else {
        reject();
      }
    });
  }


}
