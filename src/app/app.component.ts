import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-storage';

  constructor() {
    const config = {
      apiKey: "AIzaSyBqChTskODxOpTxTz7z90rxVCUlpg_pd1c",
      authDomain: "book-storage-439e8.firebaseapp.com",
      databaseURL: "https://book-storage-439e8.firebaseio.com",
      projectId: "book-storage-439e8",
      storageBucket: "book-storage-439e8.appspot.com",
      messagingSenderId: "693358849887"
    };
    firebase.initializeApp(config);
  }
}
