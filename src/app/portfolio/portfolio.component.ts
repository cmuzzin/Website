import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  image: string;

  constructor() {
    const storageRef = firebase.storage().ref().child('itemWeb/itemWeb_createCollection.PNG');
    storageRef.getDownloadURL().then(url => this.image = url);
  }

  ngOnInit() {
  }

}
