import { Component, OnInit } from '@angular/core';

import { Banner } from '../banner';

var imgJapa1 = require('../../assets/img/food-japa.jpg');
var imgJapa2 = require('../../assets/img/food-japa2.jpg');
var imgTchiquen = require('../../assets/img/food-tchiquen.jpg');

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  
    banners: Banner[] = [
      imgJapa1, imgJapa2, imgTchiquen
    ];
    


  constructor() { }

  ngOnInit() {
  }

}
