import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsYearsComponent } from './cards-years/cards-years.component';
import { IntroComponent } from './intro/intro.component';

import { SlideshowModule } from 'ng-simple-slideshow'

@NgModule({
  declarations: [
    AppComponent,
    CardsYearsComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
