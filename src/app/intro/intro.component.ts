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
      // { id: 1, name:'japa1', path: imgJapa1 },
      // { id: 2,  name:'japa2', path: imgJapa2 },
      // { id: 3,  name:'tchiquen', path: imgTchiquen }
    ];
    


  constructor() { }

  ngOnInit() {
  }

}
