import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MolSliderComponent }  from './modules/mol-slider/mol-slider.component';
import {MolMainContentComponent} from './modules/mol-main-content/mol-main-content.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MolSliderComponent, MolMainContentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
