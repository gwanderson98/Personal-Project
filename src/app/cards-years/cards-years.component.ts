import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-cards-years',
  templateUrl: './cards-years.component.html',
  styleUrls: ['./cards-years.component.css']
})
export class CardsYearsComponent implements OnInit {

  flipped = false;
  flipped1 = false;
  flipped2 = false;
  indexFlipped = 0;

  constructor() { }

  ngOnInit() {
  }

  flipIt(indexFlipped) {
    if(indexFlipped == 1){
      this.flipped = !this.flipped;
    }else if(indexFlipped == 2){
      this.flipped1 = !this.flipped1;
    }else if(indexFlipped == 3){
      this.flipped2 = !this.flipped2;
    }
  }
}
