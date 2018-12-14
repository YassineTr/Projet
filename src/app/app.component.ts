import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetAngular';
  constructor () {


    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAYNm9h6cYzKohRQkaTPidc75U_DJB29zo',
      authDomain: 'projetangular-c2b31.firebaseapp.com',
      databaseURL: 'https://projetangular-c2b31.firebaseio.com',
      projectId: 'projetangular-c2b31',
      storageBucket: 'projetangular-c2b31.appspot.com',
      messagingSenderId: '146015013957'
    };
    firebase.initializeApp(config);
}
}
